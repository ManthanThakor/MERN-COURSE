// src/Toggle.jsx
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.toggleBorder};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  margin: 1rem;
  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === "dark" ? "Light" : "Dark"} Mode
    </Button>
  );
};

export default Toggle;
