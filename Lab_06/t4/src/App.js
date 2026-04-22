// App.js - Main App component with React Router setup
// Demonstrates: React Router for multi-page navigation
// Uses BrowserRouter, Routes, Route for routing and Link for navigation

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    // BrowserRouter wraps the entire app to enable routing
    <BrowserRouter>
      <div className="App">
        {/* Navbar is displayed on all pages (outside Routes) */}
        <Navbar />

        {/* Routes defines the area where page content will change */}
        <div className="page-content">
          <Routes>
            {/* Each Route maps a URL path to a component */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />

            {/* Wildcard route (*) catches all undefined URLs = 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
