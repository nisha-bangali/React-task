import React, { useState } from 'react';
import { Link } from 'react-router';
// import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-white shadow-md  w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">MyShop</Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600">Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            <Link to="/service" className="text-gray-700 hover:text-blue-600">Service</Link>
          </div>
          {/* <div className="hidden md:flex space-x-6 items-center">
          </div> */}
          <div className='flex gap-5 items-center'>
            <div className='flex items-center gap-4'>
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
             <i className="fa-regular fa-heart fa-lg"></i>
            </div>
            <div className='flex items-center gap-4'>
              <button className='bg-blue-400 text-white font-bold px-4 py-2 rounded'>Login</button>
            <button className='border border-black px-4 py-2 rounded'>Sign in</button>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
