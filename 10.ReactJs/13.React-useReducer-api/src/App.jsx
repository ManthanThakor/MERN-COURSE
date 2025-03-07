import React, { useReducer } from "react";

import "./App.css";
// import Counter from "./components/Counter";

const initialState = {
  count: 0,
};

//! Define the reducer function to handle state transitions

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      count: state.count - 1,
    };
  } else {
    return state;
  }
};
const Counterr = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="counter-container">
      <h1>{state.count}</h1>
      <button
        className="button"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
    </div>
  );
};
function App() {
  return (
    <>
      <div className="app-container">
        <h1 className="title">React Counter</h1>
        <p className="sub-description">
          A simple counter application using Context API
        </p>
        <Counterr />
      </div>
    </>
  );
}

export default App;
