// BaseCard.js
import Image from "next/image";
import styles from "./Card.module.css";

const BaseCard = ({ data }) => {
  return (
    <div className="flex flex-auto flex-col md:flex-row m-0 m-auto">
      {data.map((item) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.image_container}>
            <Image
              src={`/images/${item.image}`}
              alt={item.alt}
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{item.headline}</h3>
            <p className={styles.description}>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BaseCard;
