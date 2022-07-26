import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_PROFILE_PAGE = 'profile/SET-PROFILE-PAGE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';
const SAVE_PHOTO_SUCCES = 'profile/SAVE-PHOTO';
const TOGGLE_IS_FETCHING = 'profile/TOGGLE-IS-FETCHING';

let initialState = {
    posts: [{ message: 'Hello', likes: 0, id: 0 }, 
    { message: 'The text-overflow property may be specified using one or two values. If one value is given, it specifies overflow behavior for the end of the line (the right end for left-to-right text, the left end for right-to-left text). If two values are given, the first specifies overflow behavior for the left end of the line, and the second specifies it for the right end of the line.', likes: 23, id: 1 }],
    newPostText: 'meow',
    profile: null,
    status: "",
    isFetching: false
}

const profileReducer = function (state = initialState, action) {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: action.newPostText,
                likes: 5,
            };
            // теперь state = this._state.profilePage
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
        }
        case SET_PROFILE_PAGE: {
            return {
                ...state, profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case SAVE_PHOTO_SUCCES: {
            return {
                ...state, profile: { ...state.profile, photos: action.photos }

            }
        }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
};
export default profileReducer;

//т.к. стрелочная функция просто возвращает объект, можно не писать return, а обернуть все в круглые скобки и сразу вернуть
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const setProfilePageSucces = (profile) => ({ type: SET_PROFILE_PAGE, profile })

export const setProfilePage = (id) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(id);
        dispatch(setProfilePageSucces(data));
    }
}

export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSucces = (photos) => ({ type: SAVE_PHOTO_SUCCES, photos })

export const getStatus = (id) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(id);
        dispatch(setStatus(data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status);
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
};

export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
};

export const savePhoto = (photo) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        let res = await profileAPI.savePhoto(photo);
        dispatch(setIsFetching(false));
        if (res.data.resultCode === 0) {
            dispatch(savePhotoSucces(res.data.data.photos));
        }
    }
};

export const saveProfileData = (profileData) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.id;
        const data = await profileAPI.updateProfile(profileData);
        if (data.data.resultCode === 0) {
            dispatch(setProfilePage(userId));
        } else {
            const errorMessage = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
            dispatch(stopSubmit("profileDataForm", { _error: errorMessage }));
            return Promise.reject();
        }
    }
};

