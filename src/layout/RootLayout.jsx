import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (

        <div className="flex flex-col min-h-screen">
            <Header></Header>
            <main className='flex-grow'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;