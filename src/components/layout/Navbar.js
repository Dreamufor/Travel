import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import Sidebar from './Sidebar'


const Navbar = (props) => {
  function openSideBar(){
    var elem = document.querySelector('.sidenav');
    elem.M_Sidenav.open()
  }

  const  { auth, profile } = props;
  //console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
  return (
    <div>
    <nav className="nav-wrapper cyan darken-2">
      <div className="container">
        <Link to='/' className="brand-logo"><i className="material-icons">bubble_chart</i>Traverse</Link>
        <a onClick={openSideBar} href="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
           { links }
          </ul>
          <ul id="mobile-demo">
        <Sidebar />
        </ul>
      </div>
    </nav>
  
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
