import React from "react";
import Content from "./Content";
import { connect } from "react-redux";
import { setProfilePage, getStatus, updateStatus, savePhoto, saveProfileData } from "../../redux/profile-reducer";
import { useMatch } from "react-router-dom";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";




class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        this.props.setProfilePage(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Content {...this.props} profile={this.props.profile}
             isOwner={this.props.match.params.userId == this.props.autorizedUserId} />
        )

    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.id,
        isFetching: state.profilePage.isFetching
    }
};



export const withRouter = (Component) => {
    let RouterComponent = (props) => {
        const match = useMatch('/profile/:userId/');
        return <Component {...props} match={match} />;
    }
    return RouterComponent;
}


export default compose(connect(mapStateToProps, { setProfilePage, getStatus, updateStatus, savePhoto, saveProfileData }), withRouter)(ProfileContainer) 