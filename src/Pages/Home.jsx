import React from 'react';
import { Outlet } from 'react-router';
import LatestVehicles from '../Components/LatestVehicles';
import Banner from '../Components/Banner'
import TopCategories from '../Components/TopCategories';
import FeaturedOwner from '../Components/FeaturedOwner';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          
            <LatestVehicles ></LatestVehicles>
            
            <TopCategories></TopCategories>
            <FeaturedOwner></FeaturedOwner>
        </div>
    );
};

export default Home;