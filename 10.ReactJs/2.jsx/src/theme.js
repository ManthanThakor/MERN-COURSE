// src/theme.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    transition: all 0.25s linear;
  }
`;

export const darkTheme = {
  body: "#1e1e1e",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
};

export const lightTheme = {
  body: "#FAFAFA",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
};
