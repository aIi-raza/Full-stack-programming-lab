// App.js - Main App component
// Renders the UserForm component

import React from 'react';
import UserForm from './components/UserForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>User Form Application</h1>
      {/* Render the UserForm component */}
      <UserForm />
    </div>
  );
}

export default App;
