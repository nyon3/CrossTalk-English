import React from 'react';
import Icon1 from '@/public/language.svg';
import Icon2 from '@/public/teacher.svg';
import Icon3 from '@/public/home.svg';

const icons = [ Icon1, Icon2, Icon3 ];

const InfoCard = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      {data.map((card, index) => {
        const CurrentIcon = icons[index];  // Get the icon using the index

        return (
          <div className="bg-white rounded-lg px-6 py-8 shadow-md" key={index}>
            <span className="inline-flex items-center justify-center p-2 bg-gray-100 rounded-md">
              <CurrentIcon className="h-6 w-6 " />
            </span>
            {/* <h3 className="text-lg font-medium text-gray-700 mt-4">{card.title}</h3> */}
            <p className=" mt-2 text-xl font-semibold pt-3">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default InfoCard;
