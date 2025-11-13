import axios from 'axios';
import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import { motion } from "framer-motion";


const MyVehiceslsCom = ({ vehicles }) => {
    const { _id, vehicleName, owner, category, pricePerDay, location, availability, coverImage, userEmail, description } = vehicles
    const { loading, setLoading } = use(AuthContext)
    const navigate = useNavigate()

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        if (result.isConfirmed) {
            try {
                setLoading(true);
                await axios.delete(`http://localhost:3000/all-vehicles/${_id}`);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                navigate('/all-vehicles');
            } catch (error) {
                console.error(error);
                toast.error("❌ Failed to delete vehicle.");
            } finally {
                setLoading(false);
            }
        }
      };
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="card bg-base-100 w-full shadow-sm"
        >
            <figure>
                <img
                    className="h-64 object-cover w-full object-center"
                    src={coverImage}
                    alt={vehicleName}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{vehicleName}</h2>
                <p>
                    Price per day:{" "}
                    <span className="font-extrabold text-accent">${pricePerDay}</span>
                </p>

                <div className="card-actions justify-between items-center mt-3">
                    <Link to={`/vehiclesDetails/${_id}`} className="btn btn-primary">
                        View Details
                    </Link>

                    <Link to={`/update-vehicle/${_id}`} className="btn btn-secondary">
                        Update Details
                    </Link>

                    <button onClick={handleDelete} className="btn btn-primary">
                        Delete
                    </button>
                </div>
            </div>
        </motion.div>

    );
};


export default MyVehiceslsCom;