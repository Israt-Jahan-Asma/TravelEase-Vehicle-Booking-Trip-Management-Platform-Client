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
        const bookingData = {
            vehicleId: vehicle._id,
            name: vehicle.name,
            image: vehicle.image,
            price: vehicle.price,
            userEmail: user.email, // later replace with user.email
            createdAt: new Date(),
        };

        try {
            const res = await axios.post("http://localhost:3000/bookings", bookingData);

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

                    <button onClick={handleBookNow} className="btn btn-primary mt-6 w-fit">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
