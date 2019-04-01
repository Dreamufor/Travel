import React from 'react'

const TravelDetails = (props) => {
    //console.log(props);
    //pass id 
    const id = props.match.params.id;
    return (
        <div className="container section travel-details">
        <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{id} - Travel Title </span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta delectus unde suscipit rerum. Dolorum amet nulla sunt totam libero animi ipsam, hic incidunt, vel mollitia, labore earum culpa unde molestias.</p>
                    
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <p>Posted by Muamu</p>
                        <p className="grey-text">2rd April, 2am</p>
                    </div>
                </div>
        </div>
    )
    }

export default TravelDetails;