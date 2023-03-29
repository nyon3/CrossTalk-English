// components/PricingCard.js

import styles from "./styles.module.css";

const PricingCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>レッスン料金</h2>
      <div className={styles.price}>
        <span>月額料金:</span>
        <span>¥13,200</span>
      </div>
      <div className={styles.fee}>
        <span>入会費:</span>
        <span>¥5,000</span>
      </div>
      <div className={styles.fee}>
        <span>テキスト代:</span>
        <span>¥3,500</span>
      </div>
      <div className={styles.lesson}>
        <span>50分のレッスン x 4回</span>
      </div>
    </div>
  );
};

export default PricingCard;
