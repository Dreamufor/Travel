import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose }  from 'redux';
import {  Redirect } from 'react-router-dom';


const TravelDetails = (props) => {
    //console.log(props);
    //pass id 
    //const id = props.match.params.id;
    const { travel , auth } = props;
    if(! auth.uid) return <Redirect to='/signin' />
    if(travel){
        return(
            <div className="container section travel-details">
                    <div className="card z-depth-0">
                                <div className="card-content">
                                    <span className="card-title">{travel.title} </span>
                                    <p>{travel.content} </p>
                                
                                </div>
                                <div className="card-action gret lighten-4 grey-text">
                                    <p>Posted by {travel.authorFirstName} {travel.authorLastName}</p>
                                    <p className="grey-text">2rd April, 2am</p>
                                </div>
                            </div>
            </div>
        )   
    }else{
        return (
        <dic className="container center">
            <p>Loading travels...</p>
        </dic>
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