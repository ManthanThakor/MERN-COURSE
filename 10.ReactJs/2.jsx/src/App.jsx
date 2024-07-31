// src/App.jsx
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "./theme";
import Counter from "./counter";
import Toggle from "./Toggle";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <Counter />
    </ThemeProvider>
  );
};

export default App;
