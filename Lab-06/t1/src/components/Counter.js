// Counter.js - Counter component
// Demonstrates: useState hook for managing state in React
// Features: Increment, Decrement (with floor at 0), and Reset buttons

import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  // useState hook to manage the count value
  // count = current state value
  // setCount = function to update the state
  // 0 = initial value of count
  const [count, setCount] = useState(0);

  // Handler for increment button - adds 1 to count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Handler for decrement button - subtracts 1 from count
  // Prevents count from going below 0
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Handler for reset button - sets count back to 0
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      {/* Display the current count value */}
      <h2 className="count-display">Count: {count}</h2>

      {/* Button group for counter controls */}
      <div className="button-group">
        <button onClick={handleIncrement} className="btn increment-btn">
          Increment
        </button>
        <button onClick={handleDecrement} className="btn decrement-btn">
          Decrement
        </button>
        <button onClick={handleReset} className="btn reset-btn">
          Reset
        </button>
      </div>

      {/* Show a message when count is at 0 and user tries to decrement */}
      {count === 0 && (
        <p className="info-text">Count cannot go below 0</p>
      )}
    </div>
  );
}

export default Counter;
