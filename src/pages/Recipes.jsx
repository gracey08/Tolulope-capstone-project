import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import { searchRecipes } from '../services/api';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [offset, setOffset] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);

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
                  rating={recipe.spoonacularScore / 20} // Convert score to 5-star rating
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
      </div>
    </div>
  );
};

export default Recipes;