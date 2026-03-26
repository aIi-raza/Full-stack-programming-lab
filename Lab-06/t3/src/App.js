// App.js - Main App component
// Renders the Actions component

import React from 'react';
import Actions from './components/Actions';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Interactive Buttons App</h1>
      {/* Render the Actions component */}
      <Actions />
    </div>
  );
}

export default App;
