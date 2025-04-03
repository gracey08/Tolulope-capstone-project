import axios from 'axios';

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const searchRecipes = async (query, offset = 0, number = 6) => {
  try {
    const response = await axios.get(`${BASE_URL}/complexSearch`, {
      params: {
        apiKey: API_KEY,
        query,
        offset,
        number,
        addRecipeInformation: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return { results: [], totalResults: 0 };
  }
};