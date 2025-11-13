import React from 'react';
import { Outlet } from 'react-router';
import LatestVehicles from '../Components/LatestVehicles';


const Home = () => {
    return (
        <div>
           h2 banner will be here
          
            <LatestVehicles ></LatestVehicles>
            
        </div>
    );
};

export default Home;