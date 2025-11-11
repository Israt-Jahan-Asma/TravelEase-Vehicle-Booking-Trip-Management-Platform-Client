import React from 'react';
import { Outlet } from 'react-router';
import LatestVehicles from '../Components/LatestVehicles';

const latestVehiclesPromise = fetch('http://localhost:3000/latest-vehicles')
.then(res=> res.json())

const Home = () => {
    return (
        <div>
           h2 banner will be here

            <LatestVehicles latestVehiclesPromise={latestVehiclesPromise}></LatestVehicles>
        </div>
    );
};

export default Home;