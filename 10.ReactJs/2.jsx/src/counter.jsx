// src/Counter.jsx
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px #fff;
  }
  50% {
    box-shadow: 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff;
  }
  100% {
    box-shadow: 0 0 5px #fff;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.body};
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  animation: ${glow} 2s infinite alternate;
  &:hover {
    transform: scale(1.05);
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.text};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  color: ${({ theme }) => theme.body};
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: ${({ theme }) => theme.toggleBorder};
    color: ${({ theme }) => theme.text};
  }
`;

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Card>
      <h1>Counter: {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </Card>
  );
};

export default Counter;
