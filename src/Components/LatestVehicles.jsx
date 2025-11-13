// import React, { use, useEffect, useState } from 'react';
// import Vehicles from './Vehicles';
// import { AuthContext } from '../context/AuthContext';
// import axios from 'axios';
// import Spinner from './Spinner';
// // { latestVehiclesPromise }
// const LatestVehicles = () => {
//     // const latesVehicles = use(latestVehiclesPromise)
//     const [latestVehicles, setLatestVehicles] = useState([]);
//     const [loading, setLoading] = use(AuthContext);

//     // Fetch latest vehicles
//     const fetchLatestVehicles = async () => {
//         setLoading(true);
//         try {
//             const res = await axios.get('http://localhost:3000/latest-vehicles');
//             setLatestVehicles(res.data);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchLatestVehicles();
//     }, []);

//     if (loading) return <Spinner></Spinner>;

//     return (
//         <div className='container-default space-y-8'>
//             <h3 className='text-center'>Latest Vehicles</h3>
//             <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 '>

//                 {
//                     latestVehicles.map(vehicles => <Vehicles key={vehicles._id}
//                         vehicles={vehicles}
//                         refreshVehicles={fetchLatestVehicles} ></Vehicles>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default LatestVehicles;import React, { useEffect, useState, useContext } from 'react';
import Vehicles from './Vehicles';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import Spinner from './Spinner';
import { use, useEffect, useState } from 'react';

const LatestVehicles = () => {
    const [latestVehicles, setLatestVehicles] = useState([]);
    const { loading, setLoading } = use(AuthContext);

    const fetchLatestVehicles = async () => {
        setLoading(true); 
        try {
            const res = await axios.get('http://localhost:3000/latest-vehicles');
            setLatestVehicles(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLatestVehicles();
    }, []);

    if (loading) return <Spinner />;

    return (
        <div className='container-default space-y-8'>
            <h3 className='text-center text-2xl font-semibold'>Latest Vehicles</h3>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {latestVehicles.map(vehicle => (
                    <Vehicles
                        key={vehicle._id}
                        vehicles={vehicle}
                        refreshVehicles={fetchLatestVehicles}
                    />
                ))}
            </div>
        </div>
    );
};

export default LatestVehicles;
