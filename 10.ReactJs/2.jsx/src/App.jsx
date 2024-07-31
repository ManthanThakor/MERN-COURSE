// src/App.jsx
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "./theme";
import Toggle from "./Toggle";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <Content />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
