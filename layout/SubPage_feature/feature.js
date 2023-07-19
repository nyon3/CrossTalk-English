import List from "@/components/List";
import styles from "./styles.module.css";

const FeatureSection = ({ title, data, background }) => {
  return (
    <section className={styles.section} style={{ background }}>
      <div className={styles.title}>{title}</div>
      <h3 className={styles.headline}>このレッスンで学ぶこと</h3>
      <List data={data} />
    </section>
  );
};

export default FeatureSection;
