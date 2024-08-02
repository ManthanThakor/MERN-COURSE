import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import StudentRegistrationForm from "./components/StudentRegistrationForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StudentRegistrationForm />
    </>
  );
}

export default App;
