// App.js - Main App component
// This is the root component that renders the Counter component

import React from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Counter Application</h1>
      {/* Render the Counter component */}
      <Counter />
    </div>
  );
}

export default App;
