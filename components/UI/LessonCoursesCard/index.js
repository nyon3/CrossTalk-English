import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";
const images = [
  {
    name: "andrea_teaching_640.jpg",
    alt: "Image 1",
    link: "/groupLesson",
    title: "日常会話グループレッスン",
    description:
      "このクラスでは、会話力を向上させたい生徒のためのクラスです。講師との会話を通して英語で話すための全体的なスキルアップを目指します",
  },
  {
    name: "private_lesson_high_five_1000.JPG",
    alt: "Image 3",
    link: "/privateLesson",
    title: "プライベートレッスン",
    description:
      "プライベートクラスは、マンツーマンで英語力を向上させたい生徒のためのクラスです。教師は、生徒が必要とする特定の分野に取り組むことで、英語スキルの向上を実現するお手伝いをします",
  },
  {
    name: "discussion_class.jpg",
    alt: "Image 2",
    link: "/discussionLesson",
    title: "ディスカッション・レッスン",
    description:
      "ディスカッションクラスは、リスニングとスピーキングのスキルを向上させたい生徒のためのクラスです。講師が様々なトピックについてディスカッションをリードすることで、ディスカッションスキルの練習をすることができます。",
  },
];

const Card = () => {
  return (
    <>
      {images.map((image, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.image_container}>
            <Image
              src={`/images/${image.name}`}
              alt={image.alt}
              width={500}
              height={500}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{image.title}</h3>
            <p className={styles.description}>{image.description}</p>
            <button className={styles.button}>
              <Link href={image.link}>もっと詳しく</Link>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
