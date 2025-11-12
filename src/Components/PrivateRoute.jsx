import React, { use, useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { TailSpin } from "react-loader-spinner"; 

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    if (loading) {
       
        return (
            <div className="flex justify-center items-center min-h-screen">
                <TailSpin
                    height={80}
                    width={80}
                    color="#4F46E5"
                    ariaLabel="loading"
                />
            </div>
        );
    }

    if (!user) {
       
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
