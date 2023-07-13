import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import testPic from "../../../public/images/study-textbook.jpg";
import ImageWrapper from "../ImageWrapper";

const Button = () => (
  <Link href="https://forms.gle/wRLWN8WiLdQLZdLQ9">
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <ImageWrapper src={testPic} alt="test" />
        <p className={styles.text}>体験レッスンに申し込む</p>
      </div>
    </div>
  </Link>
);

export default Button;
