import clNames from './Avatar.module.css';
import { NavLink } from 'react-router-dom';

function Avatar(props) {
    return (
        <div className={clNames.avatarContainer}>
            <NavLink to={'/profile' + props.id}><img src={props.avatarSrc || 'https://icdn.lenta.ru/images/2021/09/20/02/20210920021024196/square_320_5c43cbf4b742b3b9f6a141cef1a593ae.jpg'} alt='avatar' className={clNames.avatar} /></NavLink>
        </div>
    )
}

export default Avatar;