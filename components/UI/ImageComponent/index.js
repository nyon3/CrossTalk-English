import Image from "next/image";
import styles from "./styles.module.css";
import testImage from "../../../public/images/study-textbook.jpg";

const BackgroundPage = () => (
  <div className={styles.bgWrap}>
    <Image alt="Mountains" src={testImage} placeholder="blur" sizes="100vw" />
    <div className={styles.gradient_dark} />
    <div className={styles.content}>
      <p>
        to Iquery
        <br />
        information page
      </p>
    </div>
  </div>
);

export default BackgroundPage;
