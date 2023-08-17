import styles from "./styles.module.css";

function CardLayout({ children, size }) {
  const containerClass = size === "small" ? styles.small : styles.default;

  return (
    <div className={`${styles.container} ${containerClass}`}>
      <div>{children}</div>
    </div>
  );
}

export default CardLayout;
