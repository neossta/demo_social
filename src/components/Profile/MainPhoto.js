import clNames from './MainPhoto.module.css';
import Preloader from '../Preloader';

function MainPhoto(props) {
    const onFileSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    if (props.isFetching) {
        return <div className={clNames.avaPreloader}>
            <Preloader />
        </div>
    }
    return (
        <div className={clNames.avatarContainer}>
            <img src={props.photos.large || 'https://icdn.lenta.ru/images/2021/09/20/02/20210920021024196/square_320_5c43cbf4b742b3b9f6a141cef1a593ae.jpg'}
                alt='avatar' className={clNames.avatar}/>
            {props.isOwner && <div className={clNames.inputFile}>
                <label for="file">Change avatar</label>
                <input type="file" id="file" name="file" onChange={onFileSelected} /> </div>}
        </div>
    )
};

export default MainPhoto;