import styles from "./styles.module.css";
import Link from "next/link";

const Button = ({ link, children }) => {
  return (
    <div className={styles.button_container}>
      <button className={styles.basic_button}>
        <Link href={link}>{children}</Link>
      </button>
    </div>
  );
};

export default Button;
