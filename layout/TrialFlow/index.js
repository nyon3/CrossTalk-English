// /layout/TrialFlow/index.js

import styles from "./styles.module.css";

const steps = [
  {
    title: "Step 1",
    subtitle: "予約の確定",
    description: `お申し込みフォームにて、ご希望の日程をご連絡ください。
    日程調整をさせていただいてからの返答をもって受付完了となります。`,
  },
  {
    title: "Step 2",
    subtitle: "体験レッスン開始",
    description: `まずは講師が、あなたの英語レベルを確認しながら
      実際のスタイルでレッスンを受けていただきます。`,
  },
  {
    title: "Step 3",
    subtitle: "ご相談",
    description: `体験レッスンを受けられた後で、
    今後のレッスンプランやスケジュールなどをご提案。
    ご不明な点などがあればその場で回答いたします。`,
  },
  {
    title: "Step 4",
    subtitle: "ご入会のお申し込み",
    description: `当日もしくは、後日ご検討のうえお申し込みいただきます。`,
  },
];

const TrialFlow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Join our lesson</div>
      <h3 className={styles.subtitle}>
        お試し体験レッスンで自分にあうかチェックしてみませんか？
      </h3>
      <ul>
        <li>
          当スクールの体験レッスンは１回
          1,000円（税込）の有料体験レッスンとなります。
        </li>
        <li>体験レッスンはお一人様１回限りとさせていただいております。</li>
      </ul>
      <div className={styles.wrapper}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepWrapper}>
            <span className={styles.stepTitle}>{step.title}</span>
            <h4 className={styles.stepSubtitle}>{step.subtitle}</h4>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrialFlow;
