import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/slider.module.css";

const images = [
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2023/03/29/02/59/woman-7884470_1280.jpg",
    title: "Slide 1",
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2024/06/14/03/04/metro-8828747_1280.png",
    title: "Slide 2",
  },
  {
    id: 3,
    url: "https://cdn.pixabay.com/photo/2023/07/28/04/44/girl-8154388_640.jpg",
    title: "Slide 3",
  },
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className={styles.slider}>
      {images.map((image) => (
        <div key={image.id} className={styles.slide}>
          <img src={image.url} alt={image.title} />
          <div className={styles.caption}>{image.title}</div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
