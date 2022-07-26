import Avatar from '../common/Avatar/Avatar';
import clNames from './MyPosts.module.css';

function Post(props) {
    const deletePost = () => {
        props.onDeletePost(props.postId)
    }
    return (
        <div className={clNames.item}>
            <div className={clNames.postHeader}>
            <Avatar avatarSrc={props.avatarSrc} /> <span className={clNames.nameContainer}>{props.name}</span>
            </div>
            <div className={clNames.postContent}>{props.message}
            <div className={clNames.likes}><span>likes </span>{props.likes}</div> 
            <div className={clNames.delButtonContainer}><button onClick={deletePost} className={clNames.deleteButton}>Удалить</button></div>
            </div>
        </div>
    )

}
export default Post; 