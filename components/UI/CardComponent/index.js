import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const CardComponent = ({ title, content, image, alt }) => {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={alt}
        width={500}
        height={500}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{content}</p>
      </div>
    </div>
  );
};

export default CardComponent;
