import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import testPic from "../../../public/images/study-textbook.jpg";

const Button = () => (
  <Link href="/">
    <div className={styles.button}>
      <Image src={testPic} alt="test" width={500} height={500} />
      <p className={styles.text}>体験レッスンに申し込む</p>
    </div>
  </Link>
);

export default Button;
