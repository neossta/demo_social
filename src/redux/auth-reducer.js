import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const GET_CAPTCHA_SUCCES = 'auth/SET-CAPTCHA-SUCCES';

let initailState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
};

const authReducer = function (state = initailState, action) {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
                //деструктуризация двух объектов, данные из action.data перезатрут данные из state
            };
        }
        case GET_CAPTCHA_SUCCES: {
            return {
                ...state, captchaUrl: action.payload
            }
        }
        default:
            return state;
    }
};
export default authReducer;

//т.к. стрелочная функция просто возвращает объект, можно не писать return, а обернуть все в круглые скобки и сразу вернуть
export const setUserDataSucces = (id, email, login, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } });

export const setUserData = () => {
    return async (dispatch) => {
        let data = await authAPI.getAuth();
        if (data.resultCode === 0) {
            dispatch(setUserDataSucces(data.data.id, data.data.email, data.data.login, true));
        }

    }
}

export const loginUser = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, rememberMe, captcha);
        if (data.resultCode === 0) { //successfully get auth data
            dispatch(setUserData());
        } else {
            let errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit("login", { _error: errorMessage })); //stopSubmit is action creator
            // property _error will go in props to Login
            if (data.resultCode === 10) { //need to enter captcha
                dispatch(getCaptchaUrl());
            }
        }
    }
}

export const logoutUser = () => {
    return async (dispatch) => {
        let data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setUserDataSucces(null, null, null, false));
        }

    }
};

export const setCaptchaUrl = (captchaUrl) => ({ type: GET_CAPTCHA_SUCCES, payload: captchaUrl })

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        const data = await authAPI.getCaptcha();
        const captchaUrl = data.url;
        dispatch(setCaptchaUrl(captchaUrl));
    }
}

