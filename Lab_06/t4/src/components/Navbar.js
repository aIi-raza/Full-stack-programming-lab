// Navbar.js - Navigation bar component
// Uses Link from react-router-dom for client-side navigation (no page reload)

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Brand / logo text */}
      <h2 className="nav-brand">My<span>Website</span></h2>

      {/* Navigation links — use 'to' prop, NOT 'href' */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
