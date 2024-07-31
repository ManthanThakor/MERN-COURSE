// src/components/ImageCard.js
import React from "react";
import styles from "../styles/imageCard.module.css"; // Importing CSS Module

const ImageCard = ({ image }) => {
  return (
    <div className={styles.card}>
      <img src={image.url} alt={image.title} className={styles.image} />
      <div className={styles.title}>{image.title}</div>
    </div>
  );
};

export default ImageCard;
