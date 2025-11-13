import React from "react";

const categories = [
    { id: 1, title: "SUVs", image: 'https://images.unsplash.com/photo-1674110997072-41f11b7d4ae7?ixlib=rb-…' },
    { id: 2, title: "Electric", image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8' },
    { id: 3, title: "Vans", image: 'https://images.unsplash.com/photo-1674719645138-c3fd1aaf8307?ixlib=rb-…' },
    { id: 4, title: "Sedans", image: 'https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg' },
];

const TopCategories = () => {
    return (
        <section className="py-16 bg-gray-50 mt-10">
            <div className="container-default mx-auto px-2 text-center">
                <h2 className="text-center text-2xl font-semibold mb-8">Top Categories</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <div
                            key={cat.id}
                            className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="h-full w-full object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="text-lg font-semibold ">{cat.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopCategories;
