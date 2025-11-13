import React, { use, useEffect, useState } from 'react';
import MyVehicelsCom from '../Components/MyVehicelsCom';
import { AuthContext } from '../context/AuthContext';
import MyBookingsCom from '../Components/MyBookingsCom';

const MyBookings = () => {

    const { user, loading, setLoading } = use(AuthContext)
    const [bookings, setBookings] = useState([])

    useEffect (()=>{
            fetch(`http://localhost:3000/my-bookings?email=${user.email}`)
            .then(res=>res.json())
            .then(data=>{
                setBookings(data)
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
        <div className='container-default space-y-8 py-8'>
            <h2 className='text-center'>My Bookings</h2>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    bookings.map(booking => <MyBookingsCom key={bookings._id} booking={booking}> </MyBookingsCom> )
                    
                    
                }
            </div>

        </div>
    );
};

export default MyBookings;