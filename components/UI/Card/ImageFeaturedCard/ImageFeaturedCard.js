import Image from "next/image";
import Link from "next/link";
import styles from "./imageFeatured.module.css";

const ImageFeaturedCard = ({ data }) => (
  <Link href={data.link}>
    <div className={styles.jumbotron}>
      <div className={styles.container_image}>
        <Image
          src={`/images/${data.image}`}
          alt={data.alt}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.jumbotron_content}>
        <h3 className={styles.title}>{data.title}</h3>
      </div>
    </div>
  </Link>
);

export default ImageFeaturedCard;
