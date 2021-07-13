import React from 'react'
import { Link } from 'react-router-dom';

const Tiles = ({ counters, counterTitle, cardType }) => {
    return (
        <>
            <div className={`card card-wrapper  card-${cardType}`}>
                <div className="card-body card-body-wrapper d-flex flex-column align-items-center">
                    <h4 className="counter-text">{counters}</h4>
                    <p className="title-count">{counterTitle}</p>
                    <Link><p className="view-details">View Details</p></Link>
                </div>
            </div>
        </>
    )
}

export default Tiles;











