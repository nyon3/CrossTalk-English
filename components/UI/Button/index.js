import styles from "./styles.module.css";
import Link from "next/link";
const Button = ({link, children}) => {
  return (
    <div style={{
        marginTop: "2rem"
    }}>
     <button className={styles.gradient_button}>
        <Link href={link}>
          {children}
        </Link>
     </button>
    </div>
  );
};

export default Button;
