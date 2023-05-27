/**
 * PricingCard
 *
 * This component represents a card used to display the pricing details for different types of courses.
 * It takes a courseType prop and displays different pricing details based on it.
 * This component utilizes Next.js's useRouter hook for routing functionalities.
 *
 * @component
 * @prop {string} courseType - The type of course for which the pricing details are to be displayed. Possible values are: 'group_lesson', 'private_lesson', 'free_talk'.
 */

import { useRouter } from "next/router";
import styles from "./styles.module.css";

const PricingCard = ({ courseType }) => {
  const router = useRouter();
  console.log("PricingCard is rendering, router pathname:", router.pathname);

  let Price;

  // Define the content of the card based on the course type
  // Here you can further customize the pricing details for each type of course
  if (courseType === "group_lesson") {
    // Pricing for group lessons
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
          <span>50分のレッスン x 4回</span>
        </div>
      </>
    );
  } else if (courseType === "private_lesson") {
    // Pricing for private lessons
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
          <span>50分のレッスン x 4回</span>
        </div>
      </>
    );
  } else if (courseType === "free_talk") {
    // Pricing for free talk sessions
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
          <span>50分のレッスン x 4回</span>
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
