import React from 'react';
import TravelSummary from './TravelSummary';

const TravelList = ({travels}) => {

    return (
        <div className="travel-list section">
           { travels && travels.map( travel => {
               return (
                   <TravelSummary travel={travel} key={travel.id} />
               )
           })}
        </div>

        
    )
}

export default TravelList;