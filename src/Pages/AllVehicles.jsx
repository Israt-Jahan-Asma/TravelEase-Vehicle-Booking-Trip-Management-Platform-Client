import React from 'react';
import Vehicles from '../Components/Vehicles';
import { useLoaderData } from 'react-router';
import { motion } from "framer-motion";
import TopCategories from '../Components/TopCategories';

const AllVehicles = () => {
    const vehicles = useLoaderData();
    
    return (
        <div className='container-default space-y-8 py-8'>
            <h2 className='text-center'>All Vehicles</h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 '>
                {
                    vehicles.map(vehicles => <Vehicles key={vehicles._id} vehicles={vehicles}></Vehicles>)
                }
            </div>
            
                
            
        </div>
    );
};

export default AllVehicles;