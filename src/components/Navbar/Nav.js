
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import clNames from './Nav.module.css';

function Nav(props) {
  debugger
  const path = props.autorizedUserId;
  return (
    <nav className={clNames.nav}>
      <section className={clNames.sct}><NavLink to={'/profile/' + path} className={clNames.item}>Profile</NavLink></section>
      <section className={clNames.sct}><NavLink to='/dialogs' className={clNames.item}>Messages</NavLink></section>
      <section className={clNames.sct}><NavLink to='/friends' className={clNames.item}>Friends</NavLink></section>
      <section className={clNames.sct}><NavLink to='/users' className={clNames.item}>Find people</NavLink></section>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  autorizedUserId: state.auth.id,
})

export default connect(mapStateToProps)(Nav);
