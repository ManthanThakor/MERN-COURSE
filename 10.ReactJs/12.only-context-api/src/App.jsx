import React, { useState, createContext, useContext } from "react";
//Create a context to hold the count state and updater functions
const CountContext = createContext();

const App = () => {
  return (
    <>
      <h1>Hello, World!</h1>
    </>
  );
};

export default App;
