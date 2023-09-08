// components/FAQAccordion.js

import React, { useState } from "react";

const FAQAccordion = ({ data }) => {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleAccordion = (index) => {
    setOpenIndexes({
      ...openIndexes,
      [index]: !openIndexes[index],
    });
  };

  return (
    <>
      {data.map((faq, index) => (
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
