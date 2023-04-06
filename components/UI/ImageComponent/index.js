import Image from "next/image";
import styles from "./styles.module.css";

const BackgroundPage = ({ title, description, image }) => (
  <div className={styles.bgWrap}>
    <Image alt="Mountains" src={image} placeholder="blur" sizes="100vh" />
    {/* <div className={styles.gradient_dark} /> */}
    <div className={styles.content}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  </div>
);

export default BackgroundPage;
