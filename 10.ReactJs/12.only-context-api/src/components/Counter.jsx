// Counter.js
import React from "react";
import { useCount } from "./CounterProvider";
import "../App.css";

const Counter = () => {
  const { count, incrementCount, decrementCount } = useCount();

  return (
    <div className="counter-container">
      <h1>Count: {count}</h1>
      <button className="button" onClick={incrementCount}>
        +
      </button>
      <button className="button" onClick={decrementCount}>
        -
      </button>
    </div>
  );
};

export default Counter;
