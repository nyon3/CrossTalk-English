import styles from "./styles.module.css";

const InfoCard = ({ cardContent }) => {
  return (
    <div className={styles.wrapper}>
      {cardContent.map((card, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.info_icon} />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
