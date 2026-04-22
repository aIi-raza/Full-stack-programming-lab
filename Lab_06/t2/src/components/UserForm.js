// UserForm.js - User Form component
// Demonstrates: useState for form state management + onChange event handling
// Features: Name and Email inputs, Submit button, displays submitted data, clears fields after submit

import React, { useState } from 'react';
import './UserForm.css';

function UserForm() {
  // State for the input fields (controlled components)
  // These values are bound to the input fields via the value prop
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // State to store the submitted data
  // null means no data has been submitted yet
  const [submittedData, setSubmittedData] = useState(null);

  // Handle name input change
  // e.target.value gives us the current value of the input field
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior (page reload)
    e.preventDefault();

    // Only submit if both fields have values
    if (name.trim() === '' || email.trim() === '') {
      alert('Please fill in both fields');
      return;
    }

    // Save the submitted data to state
    setSubmittedData({ name, email });

    // Clear the input fields after submission
    setName('');
    setEmail('');
  };

  return (
    <div className="form-container">
      {/* Form with onSubmit handler */}
      <form onSubmit={handleSubmit}>
        {/* Name input field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}               // Controlled input - value comes from state
            onChange={handleNameChange}  // Update state on every keystroke
            placeholder="Enter your name"
          />
        </div>

        {/* Email input field */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {/* Display submitted data only after form is submitted */}
      {/* Conditional rendering: only show when submittedData is not null */}
      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;
