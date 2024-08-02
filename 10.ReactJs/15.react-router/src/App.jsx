import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import Contact from "./components/Contact";
import PostDetails from "./components/PostDetails";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts/:postId" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
