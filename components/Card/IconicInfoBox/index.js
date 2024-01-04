import React from "react";

import { SmilePlus } from "lucide-react";

//
const data = [
  {
    key: 1,
    title: "少人数制で会話量が多い",
    icon: SmilePlus,
  },
  {
    key: 2,
    title: "経験豊富な講師",
    icon: SmilePlus,
  },
  {
    key: 3,
    title: "充実した学習サポート",
    icon: SmilePlus,
  },
  {
    key: 4,
    title: "実践的な会話中心の授業",
    icon: SmilePlus,
  },
];

// InfoCard.js
const InfoCard = () => {
  return (
    <div className="\ flex flex-col md:flex-row justify-center items-baseline gap-4 p-5">
      {data.map((card) => {
        const IconComponent = card.icon; // Get the icon component

        return (
          <div
            key={card.key}
            className="w-full h-48 rounded-lg px-6 py-4 border-2 border-gray-200"
          >
            <span className="inline-flex items-center justify-center p-2 bg-rose-500 rounded-md">
              <IconComponent className="text-white" />{" "}
              {/* Render the icon component */}
            </span>
            <p className=" mt-2 text-xl font-semibold pt-3">{card.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default InfoCard;
