import React from "react";
import Slider from "./Slider";
import styles from "../styles/welcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <div className={styles.welcomeSection}>
      <div className={styles.welcomeText}>
        <h2>Welcome to the Image Gallery</h2>
        <p>Explore our collection of stunning images. Enjoy the experience!</p>
      </div>
      <div className={styles.slider}>
        <Slider />
      </div>
    </div>
  );
};

export default WelcomeSection;
