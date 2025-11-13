import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen  ">
            <h1 className="text-9xl font-bold">404</h1>
            <h2 className="text-3xl font-semibold mt-4">Oops! Page not found.</h2>
            <p className="mt-2 text-lg">
                The page you are looking for doesn’t exist or has been moved.
            </p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 btn btn-primary "
            >
                Go Home
            </Link>
        </div>
    );
    
};

export default Error;