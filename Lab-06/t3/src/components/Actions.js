// Actions.js - Actions component
// Demonstrates: Different event handling in React
// Features:
//   - onClick: Show message, Change background color, Show alert
//   - onMouseOver: Change text color on hover

import React, { useState } from 'react';
import './Actions.css';

function Actions() {
  // State to store the message displayed on screen
  const [message, setMessage] = useState('');

  // State to track the current background color
  const [bgColor, setBgColor] = useState('#ffffff');

  // State to track hover text color
  const [textColor, setTextColor] = useState('#000000');

  // Array of colors to cycle through when changing background
  const colors = ['#f0f8ff', '#ffe4e1', '#e0ffe0', '#fff8dc', '#e6e6fa', '#ffefd5'];

  // State to track which color index we're on
  const [colorIndex, setColorIndex] = useState(0);

  // onClick handler - Shows a message on the screen
  const handleShowMessage = () => {
    setMessage('Hello! This message was triggered by clicking the button.');
  };

  // onClick handler - Changes the page background color
  // Cycles through an array of predefined colors
  const handleChangeBackground = () => {
    const nextIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextIndex);
    setBgColor(colors[nextIndex]);

    // Apply background color to the body element
    document.body.style.backgroundColor = colors[nextIndex];
  };

  // onClick handler - Shows a browser alert
  const handleShowAlert = () => {
    alert('This is an alert triggered by the button click!');
  };

  // onMouseOver handler - Changes text color when hovering over the text area
  const handleMouseOver = () => {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setTextColor(randomColor);
  };

  return (
    <div className="actions-container">
      {/* Button group with onClick events */}
      <div className="button-group">
        {/* Button 1: Show message on click */}
        <button onClick={handleShowMessage} className="btn message-btn">
          Show Message
        </button>

        {/* Button 2: Change background color on click */}
        <button onClick={handleChangeBackground} className="btn bg-btn">
          Change Background Color
        </button>

        {/* Button 3: Show alert on click */}
        <button onClick={handleShowAlert} className="btn alert-btn">
          Show Alert
        </button>
      </div>

      {/* Display area for the message */}
      {/* onMouseOver event changes text color when hovering */}
      {message && (
        <div
          className="message-display"
          onMouseOver={handleMouseOver}  // Changes text color on hover
          style={{ color: textColor }}    // Apply dynamic text color
        >
          <p>{message}</p>
          <p className="hint-text">(Hover over this text to change its color!)</p>
        </div>
      )}

      {/* Info section explaining what each button does */}
      <div className="info-section">
        <h3>Event Handlers Used:</h3>
        <ul>
          <li><strong>onClick</strong> - All three buttons use onClick event</li>
          <li><strong>onMouseOver</strong> - Hover over the message text to change its color</li>
        </ul>
      </div>
    </div>
  );
}

export default Actions;
