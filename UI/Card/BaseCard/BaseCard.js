// BaseCard.js
import Image from "next/image";
import styles from "./Card.module.css";
import Button from "../../../components/Button";

const BaseCard = ({ data, showButton = true, dataType }) => {
  if (dataType && data.type !== dataType) {
    return null; // Do not render anything for non-matching items
  }
  return (
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
        <h3 className={styles.title}>{data.headline}</h3>
        <p className={styles.description}>{data.content}</p>
        {showButton && <Button link={data.link}>もっと詳しく</Button>}
      </div>
    </div>
  );
};

export default BaseCard;
