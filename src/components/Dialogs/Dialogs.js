import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import clNames from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import { MaxLengthCreator, requiredField } from '../../utils/validators';
import { Textarea } from '../FormsControls';
import Button from '../common/Button/Button';

const MaxLength10 = MaxLengthCreator(10);

const Dialog = (props) => {
    return (
        <div className={clNames.dialogConteiner}>
            <NavLink to={'/profile'}><img src={props.avatar} alt='avatar' className={clNames.avatar} /></NavLink> <NavLink to={'/dialogs/' + props.id} className={clNames.dialog}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return (
        <div className='message'>{props.text}</div>
    )
}

const Dialogs = (props) => {
    let state = props.dialogsPage
    let dialogsElements = state.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
    let messagesElements = state.messagesData.map(message => <Message text={message.text} id={message.id} />);
    const onSubmit = (formData) => {
        props.addMessage(formData.newMessageText);
    }
    if (!props.isAuth) return <Navigate to={"/login"} />
    return (
        <div className={clNames.dialogs}>
            <div className=''>
                {dialogsElements}
            </div>
            <div className={clNames.messages}>
                <div>{messagesElements}</div>
                <DialogReduxForm onSubmit={onSubmit}/>
            </div>
        </div>


    )
}

const DialogForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} value={props.newMessageText} name="newMessageText" validate={[requiredField, MaxLength10]}/>
        <Button content="Send"/>
    </form>
}

const DialogReduxForm = reduxForm({
    // a unique name for the form
    form: 'messageText'
  })(DialogForm)

export default Dialogs;