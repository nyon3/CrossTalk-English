import styles from "./styles.module.css";
import Image from "next/image";
const Hero = ({ title, description, image, alt }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{description}</p>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={image}
            alt={alt}
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
