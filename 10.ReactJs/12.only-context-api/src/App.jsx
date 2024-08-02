// App.js
import React from "react";

import "./App.css";
import Counter from "./components/Counter";
import { CounterProvider } from "./components/CounterProvider";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">React Counter</h1>
      <p className="sub-description">
        A simple counter application using Context API
      </p>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
};

export default App;
