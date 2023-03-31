import styles from "./styles.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <p className={styles.message}>
        2023.04.01 英会話カフェはコロナの影響でやっていません
      </p>
    </div>
  );
};

export default Banner;
