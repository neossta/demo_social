import clNames from './Content.module.css';
import MyPostsContainer from '../MyPosts/MyPostsContainer';
import Preloader from '../Preloader';
import MainPhoto from './MainPhoto';
import { useEffect, useState } from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileDataReduxForm from './ProfileDataEditMode';



function Content(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    });
    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <div>
            <Preloader />
        </div>
    };

    const changeToEditMode = () => {
        setEditMode(true)
    };
    const disableEditMode = () => {
        setEditMode(false)
    };
    const onSubmit = (formData) => {
        props.saveProfileData(formData).then(() => {
            setEditMode(false)});
    }
    return (
        <div className={clNames.content}>
            <MainPhoto photos={props.profile.photos} isOwner={props.isOwner} savePhoto={props.savePhoto} isFetching={props.isFetching} />
            {editMode 
            ? <ProfileDataReduxForm initialValues={props.profile} onSubmit={onSubmit} disableEditMode={disableEditMode} profile={props.profile}/> 
            : <ProfileInfo {...props} changeToEditMode={changeToEditMode}/>}
            <MyPostsContainer avatarSrc={props.profile.photos.small} name={props.profile.fullName} isOwner={props.isOwner}/>
        </div>

    );
};

export default Content;