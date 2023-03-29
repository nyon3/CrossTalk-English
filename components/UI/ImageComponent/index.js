import Image from "next/image";
import styles from "./styles.module.css";
import testImage from "../../../public/images/study-textbook.jpg";

const BackgroundPage = ({ description }) => (
  <div className={styles.bgWrap}>
    <Image alt="Mountains" src={testImage} placeholder="blur" sizes="100vh" />
    {/* <div className={styles.gradient_dark} /> */}
    <div className={styles.content}>
      <h1>日常会話グループレッスン</h1>
      <p>{description}</p>
    </div>
  </div>
);

export default BackgroundPage;
