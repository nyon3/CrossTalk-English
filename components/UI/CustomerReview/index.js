import styles from "./styles.module.css";
import Image from "next/image";

const CustomerReview = () => {
  const reviews = [
    {
      avatar: "avatar_megu.jpeg",
      name: "Megu-san",
      review:
        "クロストークでは講師との距離感が近くて楽しくレッスンができますし、実際のグループレッスンでは他の生徒さんとの勉強で刺激があります。",
      imagePosition: { top: 70, left: 50 },
    },
    {
      avatar: "avatar_kohei.JPG",
      name: "Kohei-san",
      review:
        "クロストークのグループレッスンは個別ニーズに合わせて学習内容が学べるし、なによりリアルな英会話が勉強できます！",
      imagePosition: { top: 60, left: 50 },
    },
    {
      avatar: "avatar_kaito.jpeg",
      name: "Kaito-san",
      review:
        "クロストークのグループレッスンでは、質問しやすい環境で自分のペースで英語を学べるし、英語で雑談する時間もあるか楽しいです！",
      imagePosition: { top: 70, left: 50 },
    },
    {
      avatar: "avatar_yono.JPG",
      name: "Yonosuke-san",
      review:
        "クロストークの英会話レッスンは基礎から勉強できて、文法が理解できるようになり、少しづつ英語圏の人の喋っている事がわかるようになってきました",
      imagePosition: { top: 65, left: 45 },
    },
    // ... more reviews
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carousel}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.items}>
              <div className={styles.avatar}>
                <div
                  className={styles.avatarInner}
                  style={{
                    top: `${review.imagePosition.top}%`,
                    left: `${review.imagePosition.left}%`,
                  }}
                >
                  <Image
                    src={`/images/${review.avatar}`}
                    alt="avatar"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <h3 className={styles.name}>{review.name}</h3>
              <p className={styles.review}>{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
