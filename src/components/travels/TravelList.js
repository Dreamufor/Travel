import React from 'react';
import TravelSummary from './TravelSummary';
import { Link } from 'react-router-dom';

const TravelList = ({travels}) => {

    return (
        <div className="travel-list section">
           { travels && travels.map( travel => {
               return (
                   <Link to={'/travel/' + travel.id} key={travel.id}>
                   <TravelSummary travel={travel}  />
                    </Link>
               )
           })}
        </div>

        
    )
}

export default TravelList;