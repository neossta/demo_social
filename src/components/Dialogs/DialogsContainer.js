import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



// const DialogsContainer = (props) => {

//     let addMessage = () => {
//         props.store.dispatch(addMessageActionCreator());
//     }
//     let onMessageChange = (currentMessageText) => {
//         props.store.dispatch(changeNewMessageActionCreator(currentMessageText));
//     }

//     return (
//         <Dialogs addMessage={addMessage} onMessageChange={onMessageChange} dialogsPage={props.store.getState().dialogsPage} />
        
//     )

// }



//в первом объекте будут сидеть данные из стейта

let mapStateToProps = function(state) {
    return {
        dialogsPage: state.dialogsPage,

    }
}
//возвращается коллбэки, котор.мы будем отправлять в презентационную компоненту
let mapDispatchToProps = function(dispatch) {
    return {
        addMessage: (newMessageText) => {dispatch(addMessageActionCreator(newMessageText));} ,
}
}


//connect создает контейнерную компоненту, внутри рендерит презентационную компоненту, передает ей пропсы, 
//которые возвращают функции 
//connect образается сразу к state, а не к стору

export default compose(connect(mapStateToProps, mapDispatchToProps), AuthRedirect)(Dialogs);