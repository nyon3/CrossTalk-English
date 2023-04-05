import Link from "next/link";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">CrossTalk</Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="https://forms.gle/wRLWN8WiLdQLZdLQ9">
              体験レッスン申込
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
