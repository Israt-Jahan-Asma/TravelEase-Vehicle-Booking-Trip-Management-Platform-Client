import React from 'react';
import { Outlet } from 'react-router';
import LatestVehicles from '../Components/LatestVehicles';
import Banner from '../Components/Banner'

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          
            <LatestVehicles ></LatestVehicles>
            
        </div>
    );
};

export default Home;