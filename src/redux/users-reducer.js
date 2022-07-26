import { followAPI, usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'users/SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING = 'users/TOGGLE-IS-FOLLOWING';


let initailState = {
    users: [],
    pageSize: 10,
    totalUsersCount: null,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}
const usersReducer = function (state = initailState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state;
    }
};
export default usersReducer;

//action creators
//т.к. стрелочная функция просто возвращает объект, можно не писать return, а обернуть все в круглые скобки и сразу вернуть
export const followUser = (userId) => ({ type: FOLLOW, userId });

export const unfollowUser = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    }
};
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    }
};

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
};

export const setTotalCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount,
    }
};
export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
};

export const setFollowingInProgress = (isFetching, id) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFetching,
        id
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));

    }
}

export const unfollow = (id) => {
    return async (dispatch) => {
        dispatch(setFollowingInProgress(true, id));
        let data = await followAPI.delete(id);
        if (data.resultCode === 0) {
            dispatch(unfollowUser(id));
        }
        dispatch(setFollowingInProgress(false, id))

    }
}

export const follow = (id) => {
    return async (dispatch) => {
        dispatch(setFollowingInProgress(true, id));
        let data = await followAPI.post(id);
        if (data.resultCode === 0) {
            dispatch(followUser(id));
        }
        dispatch(setFollowingInProgress(false, id));
    }

}

