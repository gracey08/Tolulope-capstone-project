import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../assets/images/logo.png'; // Replace with your logo file name (e.g., logo.jpg)


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
    <div className="container mx-auto flex justify-between items-center px-4">
      <Link to="/" className="flex items-center space-x-3 text-2xl font-bold text-primaryGreen">
        <img src={logo} alt="SweetRecipe Logo" className="h-8 w-auto" /> {/* Logo icon */}
        <span>SweetRecipe</span>
      </Link>
      <div className="space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-primaryGreen font-semibold' : 'text-gray-600 hover:text-primaryGreen'
          }
        >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className={({ isActive }) =>
              isActive ? 'text-primaryGreen font-semibold' : 'text-gray-600 hover:text-primaryGreen'
            }
          >
            Recipes
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-primaryGreen font-semibold' : 'text-gray-600 hover:text-primaryGreen'
            }
          >
            About Us
          </NavLink>         
           
        </div>
      </div>
    </nav>
  );
};

export default Navbar;