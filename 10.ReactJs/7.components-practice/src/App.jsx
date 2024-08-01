import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileImage from "./components/ProfileImage";
import ProfileName from "./components/ProfileName";
import ProfileRole from "./components/ProfileRole";
import ProfileAbout from "./components/ProfileAbout";
import Profileicons from "./components/ProfileIcons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="instagram-post-1">
        <div className="akar-iconstwitter-fill" />

        <section className="post-frame">
          <div className="post-frame-child" />
          <div className="rectangle-shape-parent">
            <div className="rectangle-shape" />
            <div className="wrapper-ellipse-shape">
              {/* Image component */}
              <ProfileImage image="https://i.pinimg.com/564x/24/89/0e/24890e6d8a1acb3765e3de6a61e1d29c.jpg" />
              a
            </div>
          </div>
          <div className="secondary-frame">
            <div className="title-text-parent">
              <div className="title-text">
                {/* profile name component */}
                <ProfileName name="Reneko" />
                {/* profile role */}
                <ProfileRole role="MERN Stack Dev" />
              </div>
              <div className="personal-choice">
                <div className="vertical-line" />
                {/* About */}
                <ProfileAbout About="I chose the MERN Stack Developer track for my passion in solving challenges through full-stack development, integrating MongoDB, Express,  React, and Node.js to build seamless, user-friendly applications." />
              </div>
            </div>
            <div className="brand-frame">
              {/* Social icons */}
              <Profileicons />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
