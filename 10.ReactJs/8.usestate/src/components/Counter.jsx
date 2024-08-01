import React, { useState } from "react";
import "../style/Counter.css";
const Counter = () => {
  //! Initialize the Counter With default value of 0
  const [counter, setCounter] = useState(0);

  //! Increment the counter
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  //! Decrement the counter
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  //! RESET the counter
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="main-counter-app">
        <div className="circular-progress">
          <span>{counter}</span>
        </div>
        <div className="c-app-title">
          <h1>Counter: {counter}</h1>
        </div>
        <div className="c-app-controls">
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
