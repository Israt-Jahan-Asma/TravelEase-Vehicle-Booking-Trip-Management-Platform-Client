import React from "react";

const FeaturedOwner = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:flex md:items-center md:gap-10">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <img
                        src="https://i.postimg.cc/W4jWnQ8f/trusted-owner.jpg"
                        alt="Featured Owner"
                        className="rounded-2xl shadow-lg w-full h-80 object-cover"
                    />
                </div>

                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Owner</h2>
                    <p className="text-gray-600 mb-6">
                        Meet <span className="font-semibold text-primary">Alex Johnson</span>, one of our top-rated hosts
                        with 200+ successful rentals and 5-star reviews. Alex’s dedication to quality and customer
                        satisfaction has made him one of the most trusted vehicle owners on TravelEase.
                    </p>
                    <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                        View Owner Profile
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedOwner;
