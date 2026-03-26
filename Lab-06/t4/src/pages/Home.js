// Home.js - Home page component (route: "/")
// Display: hero banner + feature cards explaining each page

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      {/* Hero banner section */}
      <div className="home-hero">
        <h1>Welcome to MyWebsite</h1>
        <p>
          A multi-page React app demonstrating React Router for client-side navigation.
          No page reloads — just instant, smooth navigation!
        </p>
        {/* Link used as a button to navigate to Products page */}
        <Link to="/products" className="hero-btn">Browse Products</Link>
      </div>

      {/* Feature cards — one per page */}
      <div className="features-grid">
        <div className="feature-card">
          <h3>🏠 Home</h3>
          <p>The landing page. Shows an overview and highlights of the site.</p>
        </div>
        <div className="feature-card">
          <h3>ℹ️ About</h3>
          <p>Explains the project, the technologies used, and the concepts covered.</p>
        </div>
        <div className="feature-card">
          <h3>📬 Contact Us</h3>
          <p>A simple contact form with Name, Email, and Message fields.</p>
        </div>
        <div className="feature-card">
          <h3>🛒 Products</h3>
          <p>Product catalog with titles, descriptions and Add to Cart buttons.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
