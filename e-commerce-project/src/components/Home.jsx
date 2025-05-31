import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className="pt-20 ">
            {/* Hero Section */}
            <section className="bg-gray-100 py-20 px-4 text-center">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Welcome to MyShop
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-6">
                        Discover the best deals on the latest products
                    </p>
                    <Link
                        to="/shop"
                        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                    >
                        Shop Now
                    </Link>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Products</h2>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {[1, 2, 3, 4].map((id) => (
                        <div
                            key={id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                        >
                            <img
                                src={`https://via.placeholder.com/300x200?text=Product+${id}`}
                                alt={`Product ${id}`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">Product {id}</h3>
                                <p className="text-gray-600">$29.99</p>
                                <Link
                                    to="/shop"
                                    className="inline-block mt-3 text-blue-600 hover:underline text-sm"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home
