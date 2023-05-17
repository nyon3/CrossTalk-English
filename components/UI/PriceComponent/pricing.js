// components/PlanCard.js
import styles from './styles.module.css';

const PlanCard = ({ plan }) => {
const { title, subtitle, content } = plan;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <ul className={styles.content}>
        {content.map((item, index) => (
          <li key={index}>
            <span className={styles.label}>{item.label}:</span> {item.value}
          </li>
        ))}
      </ul>
      <button className={styles.ctaButton}>詳細・お申し込み</button>
    </div>
  );
};

export default PlanCard;
