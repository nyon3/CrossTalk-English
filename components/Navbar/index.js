import Link from "next/link";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/groupLesson">Lesson</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/">Price</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
