import { connect } from "react-redux";
import { setCurrentPage, setFollowingInProgress, getUsersThunkCreator, follow, unfollow } from "../../redux/users-reducer";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/users-selectors";
import UsersAPIContainer from "./UsersAPIContainer";

let mapStateToProps = function (state) {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
};
//возвращается коллбэки, котор.мы будем отправлять в презентационную компоненту
// let mapDispatchToProps = function (dispatch) {
//     return {
//         followUser: (userId) => {
//             dispatch(followActionCreator(userId));
//         },
//         unfollowUser: (userId) => {
//             dispatch(unfollowActionCreator(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(SetCurrentPageAC(currentPage));
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCount(totalCount));
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// };



const UsersContainer = connect(mapStateToProps, {follow, unfollow, setCurrentPage, 
     setFollowingInProgress, getUsersThunkCreator,
})(UsersAPIContainer);

export default UsersContainer;