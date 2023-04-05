import styles from "./styles.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <p className={styles.message}>
        英会話カフェは現在、新型コロナウイルスの影響により営業を休止しております。
      </p>
    </div>
  );
};

export default Banner;
