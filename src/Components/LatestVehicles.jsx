import React, { use } from 'react';
import Vehicles from './Vehicles';

const LatestVehicles = ({ latestVehiclesPromise }) => {
    const latesVehicles = use(latestVehiclesPromise)
    console.log(latesVehicles);

    return (
        <div className='container-default space-y-8'>
            <h3 className='text-center'>Latest Vehicles</h3>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 '>

                {
                    latesVehicles.map(vehicles => <Vehicles key={vehicles._id} vehicles={vehicles}></Vehicles>)
                }
            </div>
        </div>
    );
};

export default LatestVehicles;