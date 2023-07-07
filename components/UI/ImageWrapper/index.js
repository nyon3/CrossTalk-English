// Next.js
import styles from "./styles.module.css";
import Image from "next/image";

const ImageWrapper = ({ src, alt }) => (
  <div className={styles.wrapper}>
    <Image
      src={src}
      alt={alt}
      fill
      style={{
        objectFit: "cover",
      }}
    />
  </div>
);

export default ImageWrapper;
