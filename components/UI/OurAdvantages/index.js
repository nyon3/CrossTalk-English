import styles from "./OurAdvantages.module.css";

const OurAdvantages = (props) => {
  const colorClass = () => {
    switch (props.color) {
      case "red":
        return styles.red_bubble;
      case "orange":
        return styles.orange_bubble;
      default:
        return styles.yellow_bubble;
    }
  };

  return (
    <>
      <p className={`${styles.abstract_shape} ${colorClass()}`}>
        {props.children}
      </p>
    </>
  );
};

export default OurAdvantages;
