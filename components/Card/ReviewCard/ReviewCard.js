import Image from "next/image";
import styles from "./review.module.css";
import Carousel from "../Carousel";

const ReviewCard = ({ data }) => {
  return (
    <Carousel>
      {data.map((item) => (
        <div className={styles.items}>
          <div className={styles.avatar}>
            <div
              className={styles.avatarInner}
              style={{
                top: `${item?.imagePosition?.top || 0}%`,
                left: `${item?.imagePosition?.left || 0}%`,
              }}
            >
              <Image
                src={`/images/${item?.avatar}`}
                alt="avatar"  // TODO: Add alt text
                width={200}
                height={200}
              />
            </div>
          </div>
          <h3 className={styles.name}>{item?.name}</h3>
          <p className={styles.review}>{item?.review}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewCard;
