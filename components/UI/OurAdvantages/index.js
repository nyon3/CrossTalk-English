import styles from "./OurAdvantages.module.css";

const OurAdvantages = () => {
  return (
    <>
      <span>RESON</span>
      <p>
        CrossTalkで英語が
        <br />
        話せるようになる理由
      </p>
      <div>
        <p className={`${styles.abstract_shape} ${styles.red_bubble}`}>
          少人数で
          <br />
          会話料が多い
        </p>
        <p className={`${styles.abstract_shape} ${styles.orange_bubble}`}>
          リアルな英語
          <br />
          が学べる
        </p>
        <p className={`${styles.abstract_shape} ${styles.yellow_bubble}`}>
          経験豊富な <br />
          外国人講師
        </p>
      </div>
      <span>LESSONS</span>
      <p>初心者から上級者まで、それぞれのレベルに合わせたレッスンプラン</p>
    </>
  );
};

export default OurAdvantages;
