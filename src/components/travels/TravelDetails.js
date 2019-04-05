import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose }  from 'redux';
import {  Redirect } from 'react-router-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';


const TravelDetails = (props) => {
    //console.log(props);
    //pass id 
    //const id = props.match.params.id;
    const { travel , auth } = props;
    if(! auth.uid) return <Redirect to='/signin' />
    if(travel){
        return(
            <div className="container">
            <div className="section travel-details">
                    <div className="card z-depth-0">
                                <div className="card-content">
                                    <span><Link to='/' className="right cyan-text text-darken-3">Back to Homepage</Link></span>
                                    <span className="card-title">{travel.title} </span>
                                    <p>{travel.content} </p>                             
                                </div>
                                <div className="card-action gret lighten-4 grey-text">
                                    <p>Posted by {travel.authorFirstName} {travel.authorLastName}</p>
                                    <p className="grey-text">{moment(travel.createAt.toDate()).calendar()}</p>                                </div>
                            </div>
                 </div>
            </div>
        )   
    }else{
        return (
        <div className="container center">
            <p>Loading travels...</p>
        </div>
            )
    }
    }

const mapStateToProps = (state, ownProps) => {
    //console.log(state);
    const id = ownProps.match.params.id;
    const travels =  state.firestore.data.travels;
    const travel = travels ? travels[id] : null;
    return {
        travel,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'travels'}
    ])
)(TravelDetails);