// CounterProvider.js
import React, { useState, createContext, useContext } from "react";

const CountContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(10);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return (
    <CountContext.Provider value={{ count, incrementCount, decrementCount }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within a CounterProvider");
  }
  return context;
}
