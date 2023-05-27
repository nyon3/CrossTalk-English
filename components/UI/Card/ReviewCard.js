import Image from "next/image";
import styles from "./review.module.css";

const ReviewCard = ({ data }) => (
  <div className={styles.items}>
    <div className={styles.avatar}>
      <div
        className={styles.avatarInner}
        style={{
          top: `${data?.imagePosition?.top || 0}%`,
          left: `${data?.imagePosition?.left || 0}%`,
        }}
      >
        <Image
          src={`/images/${data?.avatar}`}
          alt="avatar"
          width={200}
          height={200}
        />
      </div>
    </div>
    <h3 className={styles.name}>{data?.name}</h3>
    <p className={styles.review}>{data?.review}</p>
  </div>
);

export default ReviewCard;
