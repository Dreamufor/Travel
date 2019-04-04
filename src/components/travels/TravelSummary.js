
//functional 
import React from 'react';
import moment from 'moment';

const TravelSummary = ({travel}) => {
    return (
          <div className="card z-depth-0 travel-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{travel.title}</span>
                    <p>Posted by {travel.authorFirstName} {travel.authorLastName}</p>
                    <p className="grey-text">{moment(travel.createAt.toDate()).calendar()}</p>
                </div>
            </div>
    )
}

export default TravelSummary;