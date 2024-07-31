// src/components/ImageGallery.js
import React, { useState } from "react";
import styles from "../styles/imageGallery.module.css";
import ImageCard from "./ImageCard";

const images = [
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2023/01/27/10/53/anime-7748386_1280.jpg",
    title: "Image 1",
  },
  {
    id: 2,
    url: "https://img.freepik.com/premium-photo/anime-girl-character_483949-6145.jpg?size=626&ext=jpg&ga=GA1.1.1043667336.1722413973&semt=ais_hybrid",
    title: "Image 2",
  },
  {
    id: 3,
    url: "https://img.freepik.com/premium-photo/anime-girl-character-fantasy-black-dress_483949-6361.jpg?size=626&ext=jpg&ga=GA1.1.1043667336.1722413973&semt=ais_hybrid",
    title: "Image 3",
  },
  {
    id: 4,
    url: "https://img.freepik.com/premium-photo/she-reminds-me-anime-character-i-created_1262542-14135.jpg?size=626&ext=jpg&ga=GA1.1.1043667336.1722413973&semt=ais_hybrid",
    title: "Image 4",
  },
  {
    id: 5,
    url: "https://img.freepik.com/premium-photo/cartoon-girl-with-cigarette-her-hand_777271-50377.jpg?ga=GA1.1.1043667336.1722413973&semt=ais_hybrid",
    title: "Image 5",
  },
  {
    id: 6,
    url: "https://img.freepik.com/premium-photo/anime-characters-standing-room-with-window-plant_949067-59929.jpg?ga=GA1.1.1043667336.1722413973&semt=ais_hybrid",
    title: "Image 6",
  },
  {
    id: 7,
    url: "https://img.freepik.com/free-photo/illustration-anime-character-rain_23-2151394703.jpg?ga=GA1.1.1043667336.1722413973&semt=ais_hybrid",
    title: "Image 7",
  },
  {
    id: 8,
    url: "https://img.freepik.com/premium-photo/anime-girl-window_777271-50156.jpg?ga=GA1.1.1043667336.1722413973&semt=ais_hybrid",
    title: "Image 8",
  },
  {
    id: 9,
    url: "https://img.freepik.com/free-photo/lifestyle-scene-with-people-doing-regular-tasks-anime-style_23-2151002525.jpg?size=626&ext=jpg&ga=GA1.1.1043667336.1722413973&semt=ais_hybrid",
    title: "Image 9",
  },
];
const ImageGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search images..."
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={styles.gallery}>
        {filteredImages.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
