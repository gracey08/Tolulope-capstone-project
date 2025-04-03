import React from 'react';

const RecipeCard = ({ title, image, time, servings, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>{time} Mins</span>
          <span>{servings} Servings</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="ml-2 text-gray-600">({rating})</span>
        </div>
        <button className="mt-4 text-primaryGreen hover:underline">View Recipe</button>
      </div>
    </div>
  );
};

export default RecipeCard;