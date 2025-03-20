# Recipe Sharing Platform

![Recipe Sharing Platform]
*A simple platform to share and explore delicious recipes!*

The **Recipe Sharing Platform** is a static web application built with HTML, JavaScript, and Tailwind CSS. It allows users to browse a collection of recipes, view detailed recipe information, and add new recipes through a responsive form. The project uses vanilla JavaScript for DOM manipulation and interactivity, Tailwind CSS for styling, and a static JSON file for recipe data (with the potential to integrate an API for dynamic data).

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Browse Recipes**: View a list of recipes on the homepage with a summary and image for each recipe.
- **Recipe Details**: Click on a recipe to view its details, including ingredients and preparation steps, using client-side routing.
- **Add New Recipes**: Submit new recipes using a responsive form with validation (title, ingredients, and steps).
- **Responsive Design**: The app is fully responsive, working seamlessly on mobile, tablet, and desktop devices using Tailwind CSS breakpoints (`sm`, `md`, `lg`).
- **Form Validation**: Ensures all fields are filled and requires at least two ingredients for new recipes, implemented with JavaScript.
- **Client-Side Routing**: Uses JavaScript to handle navigation between pages (Home, Recipe Detail, Add Recipe) without reloading the page.
- **Styling with Tailwind CSS**: Clean and modern UI with responsive design.

## Tech Stack
- **HTML**: For structuring the web pages.
- **JavaScript**: For interactivity, DOM manipulation, form validation, and client-side routing.
- **Tailwind CSS**: For responsive and modern styling (v3.x).
- **Data**: Static `data.json` file for recipe storage (can be extended to fetch data from an API).
- **Development Server**: Uses a lightweight server (e.g., `live-server`) for local development.

## Project Structure