import React from 'react';
import { useLoaderData } from 'react-router';

const ViewBookings = () => {
    const booking = useLoaderData()
    
    const { _id, vehicleName, owner, category, pricePerDay, location, availability, coverImage, userEmail, description } = booking

    return (
        <div className="container-default">
            <div className="bg-base-100 rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-8">
                <img
                    src={coverImage}
                    alt={coverImage}
                    className="w-full md:w-1/2 rounded-lg"
                />

                <div className="flex flex-col justify-center ">
                    <div className="space-y-2">
                        <h2 >
                            {vehicleName}
                        </h2>
                        <p >{description}</p>
                        <p className="text-lg font-semibold text-accent">
                            Price: ${pricePerDay}
                        </p>
                        <p >
                            Category: {category}
                        </p>
                        <p>Owner: {owner}</p>
                        <p>Location: {location}</p>
                        <p>Availability: {availability}</p>
                    </div>

                   
                </div>
            </div>
        </div>
    );

};

export default ViewBookings;