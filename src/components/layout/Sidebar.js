import React, { Component } from "react";
import M from "materialize-css";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

class Sidebar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    render() {
        const  { auth, profile } = this.props;
        //console.log(auth);
        const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
        return (
            <div>
                <ul id="slide-out" className="sidenav">
                {links}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
  
    }
  }

export default connect(mapStateToProps)(Sidebar);