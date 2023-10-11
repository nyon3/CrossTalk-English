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
    <div className="flex flex-col mt-10 max-w-lg md:w-3/4">
      {data.map((faq, index) => (
        <div className="border-b border-gray-200 mb-10" key={index}>
          <div
            className="flex justify-between items-center py-1 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-2xl font-bold">{faq.question}</h3>
            <span className="text-gray-500">
              {openIndexes[index] ? "-" : "+"}
            </span>
          </div>
          {openIndexes[index] && (
            <div className="pb-4">
              <p className="text-lg text-gray-500 mt-4">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
