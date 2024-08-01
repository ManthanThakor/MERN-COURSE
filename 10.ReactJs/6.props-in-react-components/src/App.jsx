import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserProfile from "./components/UserProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Main APP</h1>
        <UserProfile
          Name="Devil"
          Age={20}
          Email="devil@example.com"
          Address="123 Main xyz"
          hobbies={["Reading", " Painting", " Gaming"]}
          IsAdmin="True"
          About="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto assumenda autem amet consequatur molestias. Consequatur ea nobis libero eum earum dolorum aperiam veritatis, labore delectus est? Sed quae distinctio laborum."
        />
        <UserProfile
          Name="rocks"
          Age={20}
          Email="rocks@example.com"
          Address="123 Main xyzzzzzzzzzz"
          hobbies={["Reading", " Painting", " Gaming"]}
          IsAdmin="false"
          About=" lorem2cdsmcjeinjidnjsivm"
        />
      </div>
    </>
  );
}

export default App;
