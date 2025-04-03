import React from 'react';
import RecipeCard from '../components/RecipeCard';

// Placeholder images (replace with actual images in src/assets/images/)
const heroImage = 'https://via.placeholder.com/600x400?text=Hero+Image';
const appImage = 'https://via.placeholder.com/600x400?text=App+Image';
const recipe1 = 'https://via.placeholder.com/300x200?text=Recipe+1';
const recipe2 = 'https://via.placeholder.com/300x200?text=Recipe+2';
const recipe3 = 'https://via.placeholder.com/300x200?text=Recipe+3';

const Home = () => {
  const featuredRecipes = [
    { title: 'Creamy Kale Salad', image: recipe1, time: 15, servings: 2, rating: 4.5 },
    { title: 'Tofu Tomato Soup', image: recipe2, time: 30, servings: 4, rating: 4.8 },
    { title: 'Crunchy Potatoes', image: recipe3, time: 45, servings: 3, rating: 4.7 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-lightGray py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Cooking Made Fun and Easy: Unleash Your Inner Chef
            </h1>
            <button className="bg-primaryOrange text-white px-6 py-3 rounded-full hover:bg-orange-600">
              Explore Recipes
            </button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={heroImage} alt="Hero" className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Discover, Create, Share</h2>
          <p className="text-gray-600 mb-4">Check out the most popular recipes this week</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe, index) => (
              <RecipeCard key={index} {...recipe} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-primaryGreen text-white px-6 py-3 rounded-full hover:bg-green-700">
              See All
            </button>
          </div>
        </div>
      </section>

      {/* App Promotion */}
      <section className="bg-primaryGreen text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Embrace the joy of cooking with get it on your iPhone or Android Your kitchen adventure begins now!
            </h2>
            <div className="flex space-x-4">
              <button className="bg-white text-primaryGreen px-6 py-3 rounded-full hover:bg-gray-200">
                App Store
              </button>
              <button className="bg-white text-primaryGreen px-6 py-3 rounded-full hover:bg-gray-200">
                Google Play
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={appImage} alt="App Promotion" className="w-full rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;