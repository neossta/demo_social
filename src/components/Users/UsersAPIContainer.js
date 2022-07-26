import React from 'react';
import Preloader from '../Preloader';
import Users from './Users';


class UsersAPIContainer extends React.Component {
    //если конструктор не делает ничего кроме перебрасывания пропсов в супер, его можно не писать
    //constructor(props) {
    //super(props);
    //
    
    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.getUsersThunkCreator(currentPage, this.props.pageSize )
    }

    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        }
    }
    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        setFollowingInProgress={this.props.setFollowingInProgress}
        followingInProgress={this.props.followingInProgress}

        />
        </>
    }
}
export default UsersAPIContainer;
