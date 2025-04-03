import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-lightGray py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-primaryGreen mb-4">Recipedia</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-primaryGreen">Menu</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primaryGreen">Categories</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primaryGreen">Community</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primaryGreen mb-4">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-primaryGreen">Breakfast</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primaryGreen">Lunch</a></li>
            <li><a href="#" className="text-gray-600 hover:text-primaryGreen">Dinner</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-primaryGreen mb-4">Sign Up for Our Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <button
              type="submit"
              className="bg-primaryOrange text-white p-2 rounded w-full hover:bg-orange-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;