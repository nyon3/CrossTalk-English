// components/FAQAccordion.js

import React, { useState } from "react";
import styles from "./styles.module.css";

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.accordion}>
        <div className={styles.question} onClick={toggleAccordion}>
          {question}
          <span className={styles.icon}>{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && <div className={styles.answer}>{answer}</div>}
      </div>
    </>
  );
};

export default FAQAccordion;
