// src/components/Navbar.js
import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import logo from "../assets/logo.png"; // Updated path

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <ul className={`${styles.navLinks} ${isNavOpen ? styles.active : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className={styles.navToggle} onClick={toggleNav}>
          <span className={styles.toggleIcon}></span>
          <span className={styles.toggleIcon}></span>
          <span className={styles.toggleIcon}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
