import styles from "./styles.module.css";
import Link from "next/link";

const Banner = ({ newsData }) => {
  return (
    <div className={styles.banner}>
      {newsData.slice(0, 1).map(({ slug, date, title, index }) => (
        <div key={index}>
          <Link href={`/news/${slug}`}>
            <p className={styles.message}>
              <span style={{ fontWeight: "bold" }}>News {date}</span>
              <br />
              {title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Banner;
