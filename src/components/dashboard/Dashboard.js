import React, { Component } from 'react';
import Notifications from './Notifications';
import TravelList from '../travels/TravelList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {  Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render(){
        console.log(this.props)
        const { travels , auth, notifications } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m7">
                        <TravelList travels={travels}/>
                    </div>
                    <div className="col s12 m4 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   // console.log(state);
    return {
        //travels: state.travel.travels
        travels : state.firestore.ordered.travels,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
//use compose to combine two high order component
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'travels', orderBy: ['createAt', 'desc']},
        { collection: 'notifications', limit: 3, orderBy: ['createAt', 'desc']}
    ])
)(Dashboard);