import React from 'react';

const AboutUs = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">About Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">
            Our recipes are the heart and soul of culinary exploration, providing you with memorable and delightful dining experiences. We’re passionate about cooking and sharing the joy of food with our community.
          </p>
          <p className="text-gray-600">
            Join us on this delicious journey as we discover, create, and share recipes that inspire and bring people together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;