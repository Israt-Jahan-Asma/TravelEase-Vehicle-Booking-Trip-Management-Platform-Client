import axios from 'axios';
import React, { use } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const UpdateVehicle = () => {
    const vehicle = useLoaderData()
    const {loading, setLoading} = use(AuthContext)
    const navigate = useNavigate()
    const handleUpdate = async (e) => {
        e.preventDefault()
        setLoading(true);

        const form = e.target;

        const updateVehicle = {
            vehicleName: form.vehicleName.value,
            owner: form.owner.value,
            category: form.category.value,
            pricePerDay: form.pricePerDay.value,
            location: form.location.value,
            availability: form.availability.value,
            description: form.description.value,
            coverImage: form.coverImage.value,


        };

        try {
            const res = await axios.put(`http://localhost:3000/all-vehicles/${vehicle._id}`, updateVehicle);
            if (res.data.result.modifiedCount) {
                toast.success("✅ Vehicle added successfully!");
                navigate('/all-vehicles')
                
                
            }
        } catch (error) {
            console.error(error);
            toast.error("❌ Failed to add vehicle.");
        } 
        finally {
            setLoading(false);
        }
        };
    return (
        <div className="min-h-screen flex justify-center items-center py-10">
            <div className="card w-full max-w-2xl shadow-xl bg-base-100 p-8"> 
            <h2 className="text-2xl font-semibold text-center text-secondary mb-6">
            UpdateVehicle
            </h2>
            <div>
                    <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input type="text" name="vehicleName" defaultValue={vehicle.vehicleName} placeholder="Vehicle Name" className="input input-bordered w-full" required />
                        <input type="text" name="owner" defaultValue={vehicle.owner} placeholder="Owner" className="input input-bordered w-full" required />
                        <input type="text" name="category" defaultValue={vehicle.category} placeholder="Category (Car, SUV, Bike...)" className="input input-bordered w-full" required />
                        <input type="number" name="pricePerDay" defaultValue={vehicle.pricePerDay} placeholder="Price Per Day ($)" className="input input-bordered w-full" required />
                        <input type="text" name="location" defaultValue={vehicle.location} placeholder="Location" className="input input-bordered w-full" required />

                        <select name="availability" defaultValue={vehicle.availability} className="select select-bordered w-full" required>
                        <option value="">Select Availability</option>
                        <option value="Available">Available</option>
                        <option value="Unavailable">Booked</option>
                    </select>

                        <input type="text" name="coverImage" defaultValue={vehicle.coverImage} placeholder="Cover Image URL" className="input input-bordered w-full md:col-span-2" required />

                        <textarea name="description" defaultValue={vehicle.description} placeholder="Description" className="textarea textarea-bordered w-full md:col-span-2" required></textarea>


                    <button
                        type="submit"
                        
                        className="btn btn-primary md:col-span-2"
                    >
                        Update Vehicle
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default UpdateVehicle;