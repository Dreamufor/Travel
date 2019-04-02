
//functional 
import React from 'react';

const TravelSummary = ({travel}) => {
    return (
          <div className="card z-depth-0 travel-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{travel.title}</span>
                    <p>Posted by Muamu</p>
                    <p className="grey-text">2rd April, 2am</p>
                </div>
            </div>
    )
}

export default TravelSummary;