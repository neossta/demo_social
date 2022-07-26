import { setUserData } from "./auth-reducer";

const INITIALIZED_SUCCES = 'INITIALIZED-SUCCES';

let initailState = {
    initialized: false,
};

const appReducer = function (state = initailState, action) {
    switch (action.type) {
        case INITIALIZED_SUCCES: {
            return {
                ...state,
                initialized: true,
            };
        }
        default:
            return state;
    }
};
export default appReducer;


export const initializedSucces = () => ({ type: INITIALIZED_SUCCES });

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(setUserData());
        Promise.all([promise]).then(() => {
            dispatch(initializedSucces());
        });
    }

}
