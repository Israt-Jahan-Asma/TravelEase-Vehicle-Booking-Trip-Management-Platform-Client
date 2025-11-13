import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const MyBookingsCom = ({booking}) => {
    const { _id, vehicleName, owner, category, pricePerDay, location, availability, coverImage, userEmail, description } = booking
    return (
        <motion.div
                    whileHover={{ scale: 1.05 }} className="card bg-base-100 w-full shadow-sm">
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
                    <Link to={`/my-bookings/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </motion.div>
    );
};

export default MyBookingsCom;