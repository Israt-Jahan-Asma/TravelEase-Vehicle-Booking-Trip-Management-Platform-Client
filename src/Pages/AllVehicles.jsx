import React, { useState, useMemo } from 'react';
import Vehicles from '../Components/Vehicles';
import { useLoaderData } from 'react-router';

const AllVehicles = () => {

    const loadedVehicles = useLoaderData();

    // manage filter and sort settings
    const [filter, setFilter] = useState({
        category: 'All',
        location: 'All',
        priceSort: '',
    });

    
    const uniqueOptions = useMemo(() => {
        const categories = new Set(['All']);
        const locations = new Set(['All']);
        loadedVehicles.forEach(v => {
            categories.add(v.category);
            locations.add(v.location);
        });
        return {
            categories: Array.from(categories),
            locations: Array.from(locations),
        };
    }, [loadedVehicles]);

    // Handle filter/sort changes
    const handleFilterChange = (e) => {
        setFilter(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // Main logic for filtering and sorting
    const filteredAndSortedVehicles = useMemo(() => {
        let result = [...loadedVehicles];

        // 1. Filtering by Category
        if (filter.category !== 'All') {
            result = result.filter(v => v.category === filter.category);
        }

        // 2. Filtering by Location
        if (filter.location !== 'All') {
            result = result.filter(v => v.location === filter.location);
        }

        // 3. Sorting by Price
        if (filter.priceSort) {
            result.sort((a, b) => {
                const priceA = parseFloat(a.pricePerDay);
                const priceB = parseFloat(b.pricePerDay);

                if (filter.priceSort === 'asc') {
                    return priceA - priceB;
                } else {
                    return priceB - priceA;
                }
            });
        }

        return result;
    }, [loadedVehicles, filter]);

    return (
        <div className='container-default space-y-8 py-8  text-base-content'>
            <div className="max-w-xl mb-12 text-center">
            <h4 className="text-primary text-center font-semibold uppercase">
                All New Models
            </h4>
            <h2 className="text-4xl md:text-5xl font-extrabold text-base-content my-3 text-center">
                All Vehicles
            </h2>
            </div>

            {/* Filtering and Sorting Controls */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 p-4 ">

                {/* Filter by Category */}
                <select
                    name="category"
                    value={filter.category}
                    onChange={handleFilterChange}
                    className="select select-bordered w-full md:w-auto bg-base-100 text-base-content"
                >
                    <option disabled>Filter by Category</option>
                    {uniqueOptions.categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>

                {/* Filter by Location */}
                <select
                    name="location"
                    value={filter.location}
                    onChange={handleFilterChange}
                    className="select select-bordered w-full md:w-auto bg-base-100 text-base-content"
                >
                    <option disabled>Filter by Location</option>
                    {uniqueOptions.locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                    ))}
                </select>

                {/* Sort by Price */}
                <select
                    name="priceSort"
                    value={filter.priceSort}
                    onChange={handleFilterChange}
                    className="select select-bordered w-full md:w-auto bg-base-100 text-base-content"
                >
                    <option value="">Sort by Price</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>

            </div>

            {/* Vehicle Display Area */}
            {filteredAndSortedVehicles.length > 0 ? (
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
                    {filteredAndSortedVehicles.map(v => (
                        <Vehicles key={v._id} vehicles={v} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <p className="text-xl opacity-80">No vehicles match your current filter criteria.</p>
                </div>
            )}
        </div>
    );
};

export default AllVehicles;