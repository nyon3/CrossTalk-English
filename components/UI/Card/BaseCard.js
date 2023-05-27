import Image from "next/image";
import styles from "./Card.module.css";

const BaseCard = ({ data }) => (
  <div className={styles.card}>
    <div className={styles.image_container}>
      <Image
        src={`/images/${data.image}`}
        alt={data.alt}
        width={500}
        height={500}
        className={styles.image}
      />
    </div>
    <div className={styles.content}>
      <h3 className={styles.title}>{data.name}</h3>
      <p className={styles.description}>{data.description}</p>
    </div>
  </div>
);

export default BaseCard;
