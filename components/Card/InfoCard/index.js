import PropTypes from 'prop-types'; // Make sure to install 'prop-types' if not done already
import styles from "./styles.module.css";

const InfoCard = ({ content }) => {
  return (
    <div className={styles.wrapper}>
      {content.map((card) => (
        <div className={styles.card} key={card.title}>
          <div className={styles.info_icon} /> {/* Consider using an SVG or image icon */}
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

InfoCard.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default InfoCard;
