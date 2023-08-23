// HighlightedFeature.js
import styles from "./styles.module.css";
// NOTE - This component is not used anywhere
const HighlightedFeature = ({ color, children }) => {
  const colorClass = () => {
    switch (color) {
      case "red":
        return styles.red_bubble;
      case "orange":
        return styles.orange_bubble;
      case "yellow":
        return styles.yellow_bubble;
      default:
        return styles.yellow_bubble;
    }
  };

  return (
    <p className={`${styles.abstract_shape} ${colorClass()}`}>{children}</p>
  );
};

export default HighlightedFeature;
