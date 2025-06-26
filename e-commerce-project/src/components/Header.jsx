import React, { useState } from 'react';
import { NavLink  } from 'react-router';
import { useTheme } from './ThemeContext';

const Navbar = () => {

  const { theme, toggleTheme } = useTheme();

  const auth = JSON.parse(localStorage.getItem("auth"))

  
 const handleLogout = ()=>{
   localStorage.clear();
    alert("Account Deleted");
    window.location.reload();
 }

  return (
    <nav className='bg-white dark:bg-gray-800 shadow-md  w-full z-10  dark:text-white'>
     
    {/* <nav className="bg-white shadow-md  w-full z-10"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink  to="/" className="text-2xl font-bold text-gray-800">MyShop</NavLink >
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/" className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-medium"
                      : "text-gray-700 hover:text-blue-600"
                  }>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-medium"
                      : "text-gray-700 hover:text-blue-600"
                  }>Shop</NavLink>
            <NavLink to="/about" className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-medium"
                      : "text-gray-700 hover:text-blue-600"
                  }>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-medium"
                      : "text-gray-700 hover:text-blue-600"
                  }>Contact</NavLink>
            <NavLink to="/service" className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-medium"
                      : "text-gray-700 hover:text-blue-600"
                  }>Service</NavLink>
          </div>
          {/* <div className="hidden md:flex space-x-6 items-center">
          </div> */}
          <div className='flex gap-5 items-center'>
            <div className='flex items-center gap-4'>
              <NavLink to='/card' title='Add-To-Card'><i className="fa-solid fa-cart-shopping fa-lg"></i></NavLink>
             <NavLink to='/wishlist' title='WishList'><i className="fa-regular fa-heart fa-lg"></i></NavLink>
            </div>
            <div className='flex items-center gap-4'>
              <button className='bg-blue-400 text-white font-bold px-4 py-2 rounded'><NavLink className='login' to='/login'>Login</NavLink></button>
           {auth ?  <button
             className='border border-black px-4 py-2 rounded'><NavLink className='logout' to='/logout'
              onClick={handleLogout}
           >LogOut</NavLink></button>
                  : <button className='border border-black px-4 py-2 rounded'><NavLink className='signin' to='/signin'>Sign In</NavLink></button>
              
 }
            </div>
            <div className='cursor-pointer' onClick={toggleTheme}>
             <i title={`${theme === "light" ? 'Dark Mood' : 'Light Mood'}`} className={`fa-solid fa-${theme==='dark' ? 'sun' : 'moon'} fa-lg`}></i>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
