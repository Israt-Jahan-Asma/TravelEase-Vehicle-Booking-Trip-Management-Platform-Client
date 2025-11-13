import React from 'react';
import { useLoaderData } from 'react-router';

const ViewBookings = () => {
    const booking = useLoaderData()

    const { _id, vehicleName, owner, category, pricePerDay, location, availability, coverImage, userEmail, description } = booking

    return (
        
        <section className="section bg-base-100 text-base-content">
            <div className="container-default">
                <div className="bg-base-200 rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-8">
                    <img
                        src={coverImage}
                        alt={vehicleName}
                        className="w-full md:w-1/2 rounded-lg object-cover shadow-md"
                    />

                    <div className="flex flex-col justify-center text-base-content">
                        <div className="space-y-3">
                            
                            <h2 className="text-3xl font-bold">{vehicleName}</h2>
                            <p className="opacity-80">{description}</p>

                           
                            <p className="text-xl font-extrabold text-primary">
                                Price: ${pricePerDay} / day
                            </p>

                           
                            <p><span className="font-semibold">Category:</span> {category}</p>
                            <p><span className="font-semibold">Owner:</span> {owner}</p>
                            <p><span className="font-semibold">Location:</span> {location}</p>
                            <p><span className="font-semibold">Availability:</span> {availability}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewBookings;