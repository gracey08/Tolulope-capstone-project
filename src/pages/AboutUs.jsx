import React from 'react';

// Import the background image
import aboutUsBg from '../assets/images/about-us-bg.jpg';

const AboutUs = () => {
  return (
    <div
      className="py-16 min-h-screen"
      style={{
        backgroundImage: `url(${aboutUsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="min-h-screen bg-black bg-opacity-40">
        <div className="container mx-auto px-4 flex items-center justify-center min-h-screen">
          <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md max-w-2xl">
            <h1 className="text-3xl font-semibold text-gray-800 mb-8">About Us</h1>
            <div>
              <p className="text-gray-600 mb-4">
                Our recipes are the heart and soul of culinary exploration, providing you with memorable and delightful dining experiences. We’re passionate about cooking and sharing the joy of food with our community.
              </p>
              <p className="text-gray-600">
                Join us on this delicious journey as we discover, create, and share recipes that inspire and bring people together. From quick meals to gourmet delights, our platform is designed to make cooking accessible and enjoyable for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;