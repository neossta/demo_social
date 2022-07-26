
import { connect } from 'react-redux';
import { addPostActionCreator, deletePost } from '../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = function(state) {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
};
//возвращается коллбэки, котор.мы будем отправлять в презентационную компоненту
let mapDispatchToProps = function(dispatch) {
    return {
        onAddPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
            },
        onDeletePost: (postId) => {
            dispatch(deletePost(postId))
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;


