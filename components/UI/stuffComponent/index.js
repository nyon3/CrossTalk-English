import styles from "./styles.module.css"; // Import your CSS module file here
import Image from "next/image";
import tomoya from "../../../public/images/tomoya.jpg";
import andrea from "../../../public/images/andrea.jpg";

const TeacherCards = () => {
  // Define an array of teacher objects
  const teachers = [
    {
      name: "アンドリア",
      jobTitle: "英会話講師",
      photo: andrea,
      bio: "英会話講師として20年以上の豊富な経験を持ち、日本人が英語を上達させるためのポイントを熟知しています。アンドリア先生の経験豊富な指導のもと、確実に英語力を向上させましょう！",
    },
    {
      name: "トモヤ",
      jobTitle: "英会話講師",
      photo: tomoya,
      bio: "オーストラリアでの1年間の生活と仕事を通して、英語力を身につけました。CrossTalkでは、初心者の方々にやさしく丁寧な指導を行っております。一緒に、英語の基礎をしっかりと身につけましょう！",
    },
  ];

  // Use the map() method to create a new card component for each teacher
  const teacherCards = teachers.map((teacher, index) => {
    return (
      <div className={styles.card} key={index}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={teacher.photo}
            alt={teacher.name}
            width={300}
            height={300}
          />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.name}>{teacher.name}</div>
          <div className={styles.jobTitle}>{teacher.jobTitle}</div>
        </div>

        <p>{teacher.bio}</p>
      </div>
    );
  });

  // Return the component with the array of teacher cards
  return <div className={styles.teacher_cards_container}>{teacherCards}</div>;
};

export default TeacherCards;
