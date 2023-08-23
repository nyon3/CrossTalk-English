import styles from "./styles.module.css";

const InfoCard = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      {data.map((card) => (
        <div className={styles.card} key={card.title}>
          <div className={styles.info_icon} /> {/* Consider using an SVG or image icon */}
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
