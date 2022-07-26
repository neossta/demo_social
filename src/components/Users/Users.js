import clNames from './Users.module.css';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';


const User = (props) => {
    return (
        <div className={clNames.user}>
            <div><NavLink to={'/profile/' + props.id}>
                <img src={props.avatar != null ? props.avatar : 'https://icdn.lenta.ru/images/2021/09/20/02/20210920021024196/square_320_5c43cbf4b742b3b9f6a141cef1a593ae.jpg'} alt='avatar' className={clNames.avatar} />
            </NavLink> </div>
            
            <div>
                <div>{props.name}</div>
                <div className={clNames.status}>{props.status}</div>
            </div>
            <span>
                {props.followed ? <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                    props.unfollow(props.id)
                }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                        props.follow(props.id)
                    }}>Follow</button>}
            </span>
        </div>)
}
let Users = (props) => {

    let usersElements = props.users.map(user => <User name={user.name} id={user.id} followed={user.followed} avatar={user.photos.small} status={user.status}
        follow={() => { props.follow(user.id) }} unfollow={() => { props.unfollow(user.id) }} setFollowingInProgress={(followingInProgress, id) => { props.setFollowingInProgress(followingInProgress, id) }}
        followingInProgress={props.followingInProgress} />);

    useEffect(() => {
        window.scrollTo(0, 0)
    });
    return (<div>
        <div>
            {usersElements}
        </div>
        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
         onPageChanged={props.onPageChanged}  currentPage={props.currentPage} />
        </div>
    )
};

export default Users;