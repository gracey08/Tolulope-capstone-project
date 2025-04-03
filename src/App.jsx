import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/community" element={<div>Community Page (Coming Soon)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;