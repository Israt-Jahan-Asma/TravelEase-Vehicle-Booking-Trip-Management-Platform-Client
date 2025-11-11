import React from 'react';
import { useLoaderData } from 'react-router';

const ViewDetails = () => {
    const vehicles = useLoaderData()
    console.log(vehicles);
    
    return (
        <div>
            
        </div>
    );
};

export default ViewDetails;