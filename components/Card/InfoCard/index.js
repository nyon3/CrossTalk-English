import React from 'react';
import Icon1 from '@/public/language.svg';
import Icon2 from '@/public/teacher.svg';
import Icon3 from '@/public/thumbsUp.svg';

const icons = [ Icon1, Icon2, Icon3 ];

const InfoCard = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
      {data.map((card, index) => {
        const CurrentIcon = icons[index];  // Get the icon using the index

        return (
          <div className="bg-white rounded-lg shadow-md p-4 w-72" key={card.title}>
            <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center">
              <CurrentIcon className="h-6 w-6 text-gray-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mt-4">{card.title}</h3>
            <p className="text-gray-500 mt-2">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default InfoCard;
