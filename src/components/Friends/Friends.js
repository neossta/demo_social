import Avatar from '../common/Avatar/Avatar';
import clNames from './Friends.module.css';

const Friends = () => {
    return (
        <div className={clNames.friends}>
            <div className={clNames.friendContainer}><Avatar avatarSrc='http://i.absurdopedia.net/thumb/2/28/%D0%9B%D0%B5%D0%B3%D0%BE%D0%BB%D0%B0%D1%81.jpg/300px-%D0%9B%D0%B5%D0%B3%D0%BE%D0%BB%D0%B0%D1%81.jpg' />
            <span className={clNames.nameSpan}>Legolas</span></div>
            <div className={clNames.friendContainer}><Avatar avatarSrc='' /><span className={clNames.nameSpan}>Veronika Stepanova</span></div>
            <div className={clNames.friendContainer}><Avatar avatarSrc='https://shikimori.one/system/characters/original/210.jpg' /><span className={clNames.nameSpan}>Kisuke Urahara</span></div>
        </div>
    )
}

export default Friends;