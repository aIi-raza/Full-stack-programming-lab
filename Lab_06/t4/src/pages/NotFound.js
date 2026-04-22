// NotFound.js - 404 Not Found page component
// Shown when the user navigates to an undefined route (wildcard * in App.js)

import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      {/* Big 404 number */}
      <div className="not-found-code">404</div>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist or has been moved.</p>

      {/* Link styled as a button — takes user back to Home */}
      <Link to="/" className="home-link">← Go Back Home</Link>
    </div>
  );
}

export default NotFound;
