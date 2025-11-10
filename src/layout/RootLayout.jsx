import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <Header></Header>
            <main className='min-h-screen'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
            
        </div>
    );
};

export default RootLayout;