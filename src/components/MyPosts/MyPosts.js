import React from 'react';
import clNames from './MyPosts.module.css';
import Post from './Post';
import { Field, reduxForm } from 'redux-form';
import Button from '../common/Button/Button';



function MyPosts(props) {
    let postsElements = [...props.posts].reverse().map(post => <Post message={post.message}
         likes={post.likes} onDeletePost={props.onDeletePost} postId={post.id} avatarSrc={props.avatarSrc} name={props.name}/>);
    const onSubmit = (formData) => { props.onAddPost(formData.post) };
    return <div className={clNames.postsBlock}>
        {props.isOwner && <PostReduxForm onSubmit={onSubmit}/>}
        {postsElements}
    </div>
}
    


const PostForm = (props) => {
    return <div className={clNames.postForm}>
        <h3>My posts</h3>
        <form onSubmit={props.handleSubmit}>
            <div className={clNames.fieldContainer}><Field component="textarea" value={props.newPostText} name="post" placeholder="What's new?" /></div>
            <Button content='Add post'/>
        </form>
    </div>
}

const PostReduxForm = reduxForm({
    // a unique name for the form
    form: 'post'
})(PostForm)
export default MyPosts;


