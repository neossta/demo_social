import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../logo.svg';
import menu from '../../menu-icon.png'
import './Header.css';

function Header(props) {
    const navigate = useNavigate();
    return (
        <header className="App-header">
            <img src={menu} className="App-menu" alt="menu" onClick={() => {navigate('/menu')}} />
            <img src={logo} className="App-logo" alt="logo" /> 
            <div className='loginBlock'>
                {props.isAuth 
                ? <div>{props.login} <button onClick={props.logoutUser}>Log out</button></div> 
                : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
}
export default Header;