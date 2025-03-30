// Function to fetch recipes from the MealDB API
async function fetchRecipes() {
    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return [];
    }
  }
  
  // Function to create a recipe card HTML
  function createRecipeCard(recipe, showDetails = false) {
    return `
      <div class="bg-white rounded-lg shadow-md p-4 flex flex-col space-y-2">
        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" class="w-full h-40 object-cover rounded-lg">
        <h3 class="text-lg font-semibold text-gray-800">${recipe.strMeal}</h3>
        <div class="flex justify-between text-sm text-gray-600">
          <span>30 Min</span>
          <span>4 Serving</span>
          <span>Easy</span>
        </div>
        ${showDetails ? `
          <div class="flex items-center space-x-1">
            <span>★★★★★</span>
            <span class="text-gray-600">(4.5)</span>
          </div>
          <div class="flex justify-between text-sm text-gray-600">
            <span>${Math.floor(Math.random() * 5) + 1} Comments</span>
            <span>${Math.floor(Math.random() * 5) + 1} Shares</span>
          </div>
        ` : ''}
      </div>
    `;
  }
  
  // Populate recipes on the Landing Page
  if (document.getElementById('recipe-list')) {
    fetchRecipes().then(recipes => {
      const recipeList = document.getElementById('recipe-list');
      recipes.slice(0, 6).forEach(recipe => {
        recipeList.innerHTML += createRecipeCard(recipe);// Function to fetch recipes from the MealDB API
        async function fetchRecipes() {
          try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const data = await response.json();
            return data.meals;
          } catch (error) {
            console.error('Error fetching recipes:', error);
            return [];
          }
        }
        
        // Function to create a recipe card HTML
        function createRecipeCard(recipe, showDetails = false) {
          return `
            <div class="bg-white rounded-lg shadow-md p-4 flex flex-col space-y-2 recipe-card">
              <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" class="w-full h-40 object-cover rounded-lg">
              <h3 class="text-base sm:text-lg font-semibold text-gray-800">${recipe.strMeal}</h3>
              <div class="flex justify-between text-xs sm:text-sm text-gray-600">
                <span>30 Min</span>
                <span>4 Serving</span>
                <span>Easy</span>
              </div>
              ${showDetails ? `
                <div class="flex items-center space-x-1">
                  <span class="text-xs sm:text-sm">★★★★★</span>
                  <span class="text-gray-600 text-xs sm:text-sm">(4.5)</span>
                </div>
                <div class="flex justify-between text-xs sm:text-sm text-gray-600">
                  <span>${Math.floor(Math.random() * 5) + 1} Comments</span>
                  <span>${Math.floor(Math.random() * 5) + 1} Shares</span>
                </div>
              ` : ''}
            </div>
          `;
        }
        
        // Populate recipes on the Landing Page
        if (document.getElementById('recipe-list')) {
          fetchRecipes().then(recipes => {
            const recipeList = document.getElementById('recipe-list');
            recipes.slice(0, 6).forEach(recipe => {
              recipeList.innerHTML += createRecipeCard(recipe);
            });
          });
        }
        
        // Populate community recipes on About Us and Community Pages
        if (document.getElementById('community-recipes')) {
          fetchRecipes().then(recipes => {
            const communityRecipes = document.getElementById('community-recipes');
            recipes.slice(0, 4).forEach(recipe => {
              communityRecipes.innerHTML += createRecipeCard(recipe, true);
            });
          });
        }
      });
    });
  }
  
  // Populate community recipes on About Us and Community Pages
  if (document.getElementById('community-recipes')) {
    fetchRecipes().then(recipes => {
      const communityRecipes = document.getElementById('community-recipes');
      recipes.slice(0, 4).forEach(recipe => {
        communityRecipes.innerHTML += createRecipeCard(recipe, true);
      });
    });
  }
  const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=YOUR_API_KEY');