import styles from "./styles.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <p className={styles.message}>
        英会話カフェはディスカッション・クラスとして運営方法を変更しました。
      </p>
    </div>
  );
};

export default Banner;
