import React from "react";
import styles from "../styles/arrow.module.css";

export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.customPrevArrow} onClick={onClick}>
      ◀
    </div>
  );
};

export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className={styles.customNextArrow} onClick={onClick}>
      ▶
    </div>
  );
};
