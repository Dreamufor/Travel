import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const  { auth, profile } = props;
  //console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
  return (
    <div>
    <nav className="cyan darken-2">
      <div className="container nav-wrapper">
        <Link to='/' className="brand-logo"><i className="material-icons">bubble_chart</i>Traverse</Link>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
           { links }
           </ul>
      </div>
    </nav>
    <ul className="sidenav" id="mobile-demo">
    { links }
    </ul>
    </div>   
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile

  }
}

export default connect(mapStateToProps)(Navbar);
