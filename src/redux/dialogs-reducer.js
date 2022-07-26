const ADD_MESSAGE = 'dialogs/ADD-MESSAGE';

let initialState = {
    dialogsData: [{ id: 1, name: "Legolas", avatar: 'http://i.absurdopedia.net/thumb/2/28/%D0%9B%D0%B5%D0%B3%D0%BE%D0%BB%D0%B0%D1%81.jpg/300px-%D0%9B%D0%B5%D0%B3%D0%BE%D0%BB%D0%B0%D1%81.jpg' },
    { id: 2, name: "Kisuke Urahara", avatar: 'https://shikimori.one/system/characters/original/210.jpg' }],
    messagesData: [{id: 0, text: 'jd'}, { id: 1, text: "hello" }, { id: 2, text: "Bye" }],
   
}

const dialogsReducer = function (state = initialState, action) {
    //функция ответственна именно за изменение состояния, перерисовка по-прежнему будет в state
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 3,
                text: action.newMessageText,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: '',
            };
        }
        default:
            return state;
    };
};

export default dialogsReducer;

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });
