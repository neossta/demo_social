import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import clNames from './Content.module.css';
import check from '../../check-mark.png';
import linkImg from '../../link-icon.png';
import { useState } from 'react';


const ProfileInfo = (props) => {
    const [showContacts, setContacts] = useState(false);
    return <div className={clNames.about_me_info}>
        <div className={clNames.full_name}>{props.profile.fullName}</div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} className={clNames.status} />
        {props.isOwner && <div className={clNames.editButtonContainer}><button onClick={props.changeToEditMode} className={clNames.editButton}>Edit profile</button></div>}
        {props.profile.lookingForAJob
            ? <div className={clNames.lookingJob}> <img src={check} alt="" className={clNames.checkImg} /> Looking For A Job</div>
            : null}
        {props.profile.lookingForAJobDescription ? <div className={clNames.jobDescription}><span className={clNames.skillsSection}>Skills: </span> {props.profile.lookingForAJobDescription}</div> : null}
        {props.profile.aboutMe && <div className={clNames.aboutMe}><span className={clNames.aboutSection}>About me: </span>{props.profile.aboutMe} </div>}
        {showContacts ? <button onClick={() => setContacts(false)} className={clNames.contactsButton}>Hide contacts</button> : <button onClick={() => setContacts(true)} className={clNames.contactsButton}>Show contacts</button>}
        {<ul className={clNames.contacts + ' ' + (!showContacts ? clNames.hidden : '')}>
            {Object.keys(props.profile.contacts).map(key => {
                return <Contacts contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
        </ul>} 
    </div>
};

const Contacts = ({ contactTitle, contactValue }) => {
    if (contactValue) {
        return <li className={clNames.contactsList}><img src={linkImg} alt="" className={clNames.linkImg}/><a href={contactValue} className={clNames.contactLink}>{contactTitle}</a></li>
    } else {
        return null
    }
};

export default ProfileInfo;