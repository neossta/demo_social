import React from "react";
import { Field, reduxForm } from 'redux-form';
import { loginUser } from "../../redux/auth-reducer";
import { MaxLengthCreator, requiredField } from "../../utils/validators";
import { Input } from "../FormsControls";
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import styles from "../FormsControls.module.css"

const MaxLength20 = MaxLengthCreator(20);

const Login = (props) => {
    const onSubmit = (formData) => {
        debugger
        props.loginUser(formData.email, formData.password, formData.rememberMe, formData.captcha)};
    if (props.isAuth) {
        return <Navigate to={"/profile/" + props.autorizedUserId} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder="Email" component={Input} name="email" validate={[requiredField, MaxLength20]} /></div>
            <div><Field placeholder="Password" component={Input} name="password" type="password" validate={[requiredField, MaxLength20]}/></div>
            <div><Field type={"checkbox"} component="input" name="rememberMe"/>remember me</div>
            {props.error && <div className={styles.errorForm}>{props.error}</div>}  
            {props.captchaUrl && <img src={props.captchaUrl} alt='captcha'/>}
            {props.captchaUrl && <Field placeholder="Captcha symbols" component={Input} name="captcha"/>}
            <div><button disabled={props.error && true}>Login</button></div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
  })(LoginForm)


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    autorizedUserId: state.auth.id,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {loginUser})(Login);