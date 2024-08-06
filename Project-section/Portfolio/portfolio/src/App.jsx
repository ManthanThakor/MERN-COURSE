import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Works />
      <Footer />
    </>
  );
}

export default App;
