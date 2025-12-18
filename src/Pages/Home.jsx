import React from 'react';
import LatestVehicles from '../Components/LatestVehicles';
import Banner from '../Components/Banner';
import FeaturedOwner from '../Components/FeaturedOwner';
import TopCategories from '../Components/TopCategories';


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