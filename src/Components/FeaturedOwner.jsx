import React from "react";

const FeaturedOwner = () => {
    return (
        <section className=" bg-white">
            <div className="container-default py-16 mx-auto md:flex md:items-center md:gap-10">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661344251398-4c3396156c89?q=80&w=1148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Featured Owner"
                        className="rounded-2xl shadow-lg w-full h-full object-cover"
                    />
                </div>

                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className=" text-center text-2xl font-bold mb-4">Featured Owners</h2>
                    <p className=" mb-6">
                        Meet <span className="font-semibold text-accent">Israt & Alex</span>, one of our top-rated hosts
                        with 200+ successful rentals and 5-star reviews. Alex’s dedication to quality and customer
                        satisfaction has made him one of the most trusted vehicle owners on TravelEase.
                    </p>
                    <button className="px-6 py-3 btn btn-primary rounded-lg font-medium hover:bg-primary/90 transition-colors">
                        View Owner Profile
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedOwner;
