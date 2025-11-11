import React from 'react';
import { Link } from 'react-router';

const Vehicles = ({vehicles}) => {

    const {_id, vehicleName, owner, category, pricePerDay, location, availability, coverImage, userEmail, description } = vehicles
    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                <img className='h-64 object-cover w-full object-center'
                    src={coverImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{vehicleName}</h2>
                <p>{description} </p>
                <div className="card-actions justify-between items-center">
                    <p>Price per day: <span className='font-extrabold text-accent'>${pricePerDay}</span></p>
                    <Link to={`/vehiclesDetails/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;