import React from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery";
import WelcomeSection from "./components/WelcomeSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Gallery</h1>
      </header>
      <main className="App-main">
        <WelcomeSection />
        <ImageGallery />
      </main>
      <footer className="App-footer">
        &copy; 2024 Image Gallery. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
