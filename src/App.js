import './App.css';
import Nav from './components/Navbar/Nav';
import Friends from './components/Friends/Friends';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/Preloader';
import Footer from './components/Footer/Footer';
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", function (promiseRejectionEvent) {
      // handle error here, for example log
      this.alert("Some error")
    });
  };

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", function (promiseRejectionEvent) {
      // handle error here, for example log
      this.alert(promiseRejectionEvent)
    });
  }

  render() {
    if (!this.props.initialized) { return <Preloader /> }
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <HeaderContainer />
          <Nav />
            <div className='wrapper-content'>
            <Routes>
              <Route path='/dialogs' element={<DialogsContainer />} />
              <Route path='/profile' element={<ProfileContainer />} />
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path='/friends' element={<Friends />} />
              <Route path='/users' element={
                <Suspense fallback={<div>Загрузка...</div>}>
                  <UsersContainer /> </Suspense>} />

              <Route path='/login' element={<Login />} />
              <Route path='/menu' element={<Nav />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </BrowserRouter >
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default connect(mapStateToProps, { initializeApp })(App);
