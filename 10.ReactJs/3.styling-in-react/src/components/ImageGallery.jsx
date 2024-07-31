// src/components/ImageGallery.js
import React from "react";
import styles from "../styles/imageGallery.module.css"; // Importing CSS Module
import ImageCard from "./ImageCard";
import styled from "styled-components"; // Importing styled-components

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const ImageGallery = () => {
  const images = [
    { id: 1, url: "https://via.placeholder.com/150", title: "Image 1" },
    { id: 2, url: "https://via.placeholder.com/150", title: "Image 2" },
    { id: 3, url: "https://via.placeholder.com/150", title: "Image 3" },
    // Add more images here
  ];

  return (
    <GalleryContainer>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </GalleryContainer>
  );
};

export default ImageGallery;
