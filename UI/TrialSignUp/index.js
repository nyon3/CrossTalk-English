import Link from "next/link";
import styles from "./styles.module.css";
import testPic from "@/public/images/study-textbook.jpg";
import ImageWrapper from "../../components/ImageWrapper";

const Button = () => (
  <Link href="https://forms.gle/wRLWN8WiLdQLZdLQ9">
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <ImageWrapper src={testPic} alt="test" />
        <p className={styles.text}>体験レッスンで自分に合うかチェック！</p>
      </div>
    </div>
  </Link>
);

export default Button;
