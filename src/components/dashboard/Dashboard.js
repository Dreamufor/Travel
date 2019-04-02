import React, { Component } from 'react';
import Notification from './Notifications';
import TravelList from '../travels/TravelList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render(){
        //console.log(this.props)
        const { travels } = this.props;

        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <TravelList travels={travels}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        travels: state.travel.travels
    }
}

export default connect(mapStateToProps)(Dashboard);