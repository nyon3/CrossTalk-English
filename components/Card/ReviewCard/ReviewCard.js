// ReviewCard.js
import Image from "next/image";

const ReviewCard = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg p-6">
          <div className="relative w-44 h-24 mx-auto mb-4">
            <div className="absolute top-[${item?.imagePosition?.top || 0}%] left-[${item?.imagePosition?.left || 0}%] rounded-full overflow-hidden">
              <Image
                src={`/images/${item?.avatar}`}
                alt={item.alt}
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="md:max-w-sm">
            <h3 className="text-lg font-medium text-gray-900">{item?.name}</h3>
            <p className="text-gray-500 mt-2">{item?.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReviewCard;
