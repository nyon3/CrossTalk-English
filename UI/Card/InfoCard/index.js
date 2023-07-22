import styles from "./styles.module.css";

const InfoCard = ({ imgSrc, imgAlt, headline, content }) => {
  return (
    <div className={styles.card}>
      <div className={styles.info_icon} />
      <h3>少人数制で会話量が多い</h3>
      <p>
        ロストークは岡山市北区にある英会話スクールです。テキストで基本を学ぶことはもちろん、生きた英語で、
      </p>
    </div>
  );
};

export default InfoCard;
