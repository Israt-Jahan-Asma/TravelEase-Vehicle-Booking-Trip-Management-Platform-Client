import React, { use } from "react";
import axios from "axios";
import { Navigate, NavLink, useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ViewDetails = () => {
    const vehicle = useLoaderData();
    const { user } = use(AuthContext)
    const { _id, vehicleName, owner, category, pricePerDay, location, availability, coverImage, userEmail, description } = vehicle

    const handleBookNow = async () => {

        if (!user) {
            toast.error("Please login to book a vehicle.");
            
            return;
        }

        const bookingData = {
            vehicleId: vehicle._id,
            vehicleName: vehicle.vehicleName,
            owner: vehicle.owner,
            category: vehicle.category,
            pricePerDay: vehicle.pricePerDay,
            location: vehicle.location,
            availability: vehicle.availability,
            coverImage: vehicle.coverImage,
            description: vehicle.description,
            userEmail: user.email,
            userName: user.displayName,
            createdAt: new Date(),
        };
        try {
            const res = await axios.post("http://localhost:3000/my-bookings", bookingData);

            if (res.data.insertedId) {
                Swal.fire({
                    title: "✅ Booking successful!",
                    icon: "success",
                    draggable: true
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "⚠️ Something went wrong!",
                });
            }
        } catch (error) {
            console.error("Booking error:", error);
            toast.error("❌ Failed to book. Please try again.");
        }
    };

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

                        <button onClick={handleBookNow} className="btn btn-primary mt-6 w-fit">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ViewDetails;