import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/HomePage";
import PublicNavbar from "./components/PublicNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <PublicNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
