import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-primaryGreen">
          SweetRecipe
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
          <NavLink
            to="/community"
            className={({ isActive }) =>
              isActive ? 'text-primaryGreen font-semibold' : 'text-gray-600 hover:text-primaryGreen'
            }
          >
            Community
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;