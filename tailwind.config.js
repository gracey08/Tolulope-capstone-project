/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#2E7D32', // Green from the design
        primaryOrange: '#F5A623', // Orange from the design
        lightGray: '#F5F5F5', // Light background
      },
    },
  },
  plugins: [],
};