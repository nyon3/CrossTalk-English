// components/FAQAccordion.js

import React, { useState } from "react";

const faqs = [
  {
    question: "初心者でも英会話スクールに参加できますか？",
    answer:
      "はい、もちろんです。当スクールでは、初心者から上級者まで幅広いレベルの方が参加できるグループレッスンを提供しています。初めて英語を学ぶ方にも安心してご参加いただける環境を整えております。",
  },
  // Add more FAQ objects here as needed
  {
    question: "グループレッスンの人数はどれくらいですか？",
    answer:
      "当スクールでは、グループレッスンの人数を少人数制にしています。通常は、最大6名までの生徒さんで構成されることが多いです。これにより、各生徒さんに十分な指導とサポートが提供され、効果的な学習ができる環境を作っています。",
  },
  {
    question: "英語が全く話せないのですが、大丈夫ですか？",
    answer:
      "ご心配無用です。初心者の方には特別にカリキュラムを組んでおり、基本的な英語の文法や単語から学ぶことができます。また、講師が丁寧に指導するため、英語が話せない状態からでも少しずつ上達していくことができます。",
  },
  // More FAQ objects...
];

const FAQAccordion = () => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleAccordion = (index) => {
    setOpenIndexes({
      ...openIndexes,
      [index]: !openIndexes[index],
    });
  };

  return (
    <>
      {faqs.map((faq, index) => (
        <div className="border-b border-gray-200" key={index}>
          <div
            className="flex justify-between items-center py-1 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-lg font-medium">{faq.question}</h2>
            <span className="text-gray-500">
              {openIndexes[index] ? "-" : "+"}
            </span>
          </div>
          {openIndexes[index] && (
            <div className="pb-4">
              <p className="text-gray-500">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default FAQAccordion;
