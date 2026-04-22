// index.js - Entry point of the React application
// This file renders the root App component into the DOM

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Create a root element and render the App component
// React 18 uses createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
