import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
// import Vehicles from '../Components/Vehicles';
import MyVehiclesCom from '../Components/MyVehicelsCom';

const MyVehicles = () => {
    const {user, loading, setLoading}= use(AuthContext)
    const [vehicles, setVehicles] = useState([])

    useEffect (()=>{
        fetch(`https://travel-ease-server-three.vercel.app/my-vehicles?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setVehicles(data)
            setLoading(false)
        })
    },[])

    if(loading){
        return <div className="flex justify-center items-center min-h-screen">
            <TailSpin
                height={80}
                width={80}
                color="#4F46E5"
                ariaLabel="loading"
            />
        </div>
    }

    return (
        <div className = 'container-default space-y-8 py-8'>
            
            <h4 className="text-primary text-center font-semibold uppercase">
                Your Custom Vehicles
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-base-content my-3 text-center">My Vehicles
            </h2>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    vehicles.map(vehicles => <MyVehiclesCom key={vehicles._id} vehicles={vehicles}></MyVehiclesCom>)
                }
            </div>
        </div>
    );
};

export default MyVehicles;