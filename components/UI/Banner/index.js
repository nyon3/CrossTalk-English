import styles from "./styles.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <p className={styles.message}>Welcome to our language school!</p>
        <button className={styles.button}>Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
