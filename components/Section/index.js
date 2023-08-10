import styles from "./styles.module.css";

function CardLayout({ children, size, gap }) {
  const containerClass = size === "small" ? styles.small : styles.default;

  return (
    <div className={`${styles.container} ${containerClass}`}>
      <div style={{ margin: gap }}>{children}</div>
    </div>
  );
}

export default CardLayout;
