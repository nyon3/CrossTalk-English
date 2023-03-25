import React from "react";
import styles from "./styles.module.css";

const CourseInfo = ({ title, items }) => {
  return (
    <div className={styles.courseInfo}>
      <h3 className={styles.courseInfoTitle}>{title}</h3>
      <ul className={styles.courseInfoList}>
        {items.map((item, index) => (
          <li key={index} className={styles.courseInfoItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseInfo;
