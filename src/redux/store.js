import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";



let store = {
    _state: {
        dialogsPage: {
            dialogsData: [{ id: 1, name: "Legolas", avatar: 'http://i.absurdopedia.net/thumb/2/28/%D0%9B%D0%B5%D0%B3%D0%BE%D0%BB%D0%B0%D1%81.jpg/300px-%D0%9B%D0%B5%D0%B3%D0%BE%D0%BB%D0%B0%D1%81.jpg' },
            { id: 2, name: "Kisuke Urahara", avatar: 'https://shikimori.one/system/characters/original/210.jpg' }],
            messagesData: [{id: 0, text: 'jd'}, { id: 1, text: "hello" }, { id: 2, text: "Bye" }],
            newMessageText: 'M',
        },
        profilePage: {
            posts: [{ message: 'Hello', likes: 0 }, { message: 'Bye', likes: 23 }],
            newPostText: 'meow',
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer; //observer pattern
    },
}

//т.к. стрелочная функция просто возвращает объект, можно не писать return, а обернуть все в круглые скобки и сразу вернуть
export const addPostActionCreator = () => ({ type: 'ADD-POST', });

export const changeNewTextActionCreator = (currentPostText) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: currentPostText,
    }
}

export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE', });
export const changeNewMessageActionCreator = (currentMessageText) => {
    return {
        type: 'CHANGE-NEW-MESSAGE',
        newText: currentMessageText,
    }
}



//для того чтоб проверять текущее состояние state в консоли браузера
window.store = store;
export default store;