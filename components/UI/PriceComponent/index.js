import { useRouter } from "next/router";
import styles from "./styles.module.css";

const PricingCard = () => {
  const router = useRouter();

  let Price;

  if (router.pathname === "/groupLesson") {
    Price = (
      <>
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
          <span>90分のレッスン x 4回</span>
        </div>
      </>
    );
  } else if (router.pathname === "/privateLesson") {
    Price = (
      <>
        <div className={styles.price}>
          <span>月２回:</span>
          <span>¥11,000</span>
          <span>月４回:</span>
          <span>¥22,000</span>
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
          <span>60分のレッスン x 4回</span>
        </div>
      </>
    );
  } else if (router.pathname === "/discussionLesson") {
    Price = (
      <>
        <div className={styles.price}>
          <span>月額料金:</span>
          <span>¥7,700</span>
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
          <span>75分のレッスン x 4回</span>
        </div>
      </>
    );
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>レッスン料金</h2>
      {Price}
    </div>
  );
};

export default PricingCard;
