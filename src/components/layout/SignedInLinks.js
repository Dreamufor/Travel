import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  
  return (
    <div>
        <li><NavLink to='/create'>New Travel</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating deep-orange lighten-2">
        {props.profile.initial}
        </NavLink></li>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut : () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);
