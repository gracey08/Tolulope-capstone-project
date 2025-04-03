import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { getRecipeDetails } from '../services/api';

// Import local images
import heroImage from '../assets/images/hero-image.jpg';
import appImage from '../assets/images/app-image.jpg';
import recipe1 from '../assets/images/recipe1.jpg';
import recipe2 from '../assets/images/recipe2.jpg';
import recipe3 from '../assets/images/recipe3.jpg';

const Home = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);

  // Static featured recipes with Spoonacular recipe IDs (replace with real IDs if needed)
  const featuredRecipes = [
    { title: 'Creamy Kale Salad', image: recipe1, time: 15, servings: 2, rating: 4.5, id: 716429 }, // Example ID
    { title: 'Tofu Tomato Soup', image: recipe2, time: 30, servings: 4, rating: 4.8, id: 632660 }, // Example ID
    { title: 'Crunchy Potatoes', image: recipe3, time: 45, servings: 3, rating: 4.7, id: 640573 }, // Example ID
  ];

  const handleViewRecipe = async (id) => {
    setSelectedRecipe(id);
    const details = await getRecipeDetails(id);
    setRecipeDetails(details);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
    setRecipeDetails(null);
  };

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
              <RecipeCard
                key={index}
                title={recipe.title}
                image={recipe.image}
                time={recipe.time}
                servings={recipe.servings}
                rating={recipe.rating}
                id={recipe.id}
                onView={handleViewRecipe}
              />
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
           
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={appImage} alt="App Promotion" className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* Modal for Recipe Steps */}
      {selectedRecipe && recipeDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{recipeDetails.title}</h2>
            <img
              src={recipeDetails.image}
              alt={recipeDetails.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside mb-4">
              {recipeDetails.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Steps:</h3>
            <ol className="list-decimal list-inside">
              {recipeDetails.analyzedInstructions[0]?.steps.map((step) => (
                <li key={step.number} className="mb-2">
                  {step.step}
                </li>
              )) || <p>No steps available</p>}
            </ol>
            <button
              onClick={closeModal}
              className="mt-6 bg-primaryOrange text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;