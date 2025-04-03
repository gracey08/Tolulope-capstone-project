import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import { searchRecipes, getRecipeDetails } from '../services/api';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [offset, setOffset] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);

  const fetchRecipes = async (newSearch = false) => {
    setLoading(true);
    const data = await searchRecipes(query || 'chicken', newSearch ? 0 : offset);
    setRecipes((prev) => (newSearch ? data.results : [...prev, ...data.results]));
    setTotalResults(data.totalResults);
    setOffset(newSearch ? data.results.length : offset + data.results.length);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipes(true);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes(true);
  };

  const loadMore = () => {
    fetchRecipes();
  };

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
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Find Your Perfect Recipe</h1>
        <form onSubmit={handleSearch} className="mb-8 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for recipes (e.g., chicken, vegan)"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryGreen"
          />
          <button
            type="submit"
            className="bg-primaryOrange text-white px-6 py-3 rounded-lg hover:bg-orange-600"
          >
            Search
          </button>
        </form>

        {loading && recipes.length === 0 ? (
          <p className="text-gray-600">Loading...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                  time={recipe.readyInMinutes}
                  servings={recipe.servings}
                  rating={recipe.spoonacularScore / 20}
                  id={recipe.id}
                  onView={handleViewRecipe}
                />
              ))}
            </div>
            {offset < totalResults && (
              <div className="text-center mt-8">
                <button
                  onClick={loadMore}
                  className="bg-primaryGreen text-white px-6 py-3 rounded-lg hover:bg-green-700"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}
          </>
        )}

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
    </div>
  );
};

export default Recipes;