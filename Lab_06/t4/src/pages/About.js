// About.js - About page component (route: "/about")
// Displays project summary using styled banner + content card

import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      {/* Colored banner header */}
      <div className="about-banner">
        <h1>About Us</h1>
        <p>Learn about this project and the React Router concepts it demonstrates.</p>
      </div>

      {/* Main content card */}
      <div className="about-content">
        <h3>About This Project</h3>
        <p>
          This is Lab 06 — Task 4. It is a multi-page React application built to
          practice navigation using React Router DOM. Each page is a separate
          component; the URL changes without any page reload.
        </p>

        <h3>Key Concepts Covered</h3>
        {/* Styled list of concepts */}
        <ul className="concepts-list">
          <li><strong>BrowserRouter</strong> — Wraps the app to enable routing context</li>
          <li><strong>Routes &amp; Route</strong> — Map URL paths to page components</li>
          <li><strong>Link</strong> — Navigate between pages without page reload</li>
          <li><strong>Wildcard Route (*)</strong> — Catches all unknown URLs (404 page)</li>
        </ul>

        <h3>Technologies Used</h3>
        <ul className="tech-badges">
          <li>React 18</li>
          <li>React Router DOM v6</li>
          <li>CSS3</li>
          <li>Google Fonts (Inter)</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
