import { Field, reduxForm } from "redux-form";
import { requiredField, MaxLengthCreator } from "../../utils/validators"
import Button from "../common/Button/Button";
import { Input, Textarea } from "../FormsControls";
import styles from "../FormsControls.module.css";
import clNames from './Content.module.css';


const MaxLength20 = MaxLengthCreator(20);
const MaxLength200 = MaxLengthCreator(200);

const ProfileDataForm = (props) => {
    return <div className={clNames.formContainer}>
        <form onSubmit={props.handleSubmit}>
            <div><b>Full name: </b>
            <Field placeholder="Your name" component={Input} name="fullName" validate={[requiredField, MaxLength20]} /></div>
            <div><Field type={"checkbox"} component="input" name="lookingForAJob" />Looking for a job</div>
            <div><b>Professional skills: </b>
            <Field placeholder="Skills" component={Textarea} name="lookingForAJobDescription" validate={[MaxLength200]} /></div>
            <div><b>About me: </b>
            <Field placeholder="About me" component={Textarea} name="aboutMe" validate={[MaxLength200]} /></div>
            <b>Contacts:</b>
            <div> {Object.keys(props.profile.contacts).map(key => {
                return <div><b>{key}</b> <Field placeholder={key} component={Input} name={"contacts." + key} /> </div>
            })}</div>
             {props.error && <div className={styles.errorForm}>{props.error}</div>} 
            <Button content="Save" />
        </form>
        <Button content="Cancel" onClick={props.disableEditMode}/>
    </div>
};

const ProfileDataReduxForm = reduxForm({
    // a unique name for the form
    form: 'profileDataForm'
})(ProfileDataForm);

export default ProfileDataReduxForm;