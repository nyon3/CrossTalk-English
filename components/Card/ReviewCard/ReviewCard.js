// ReviewCard.js
import Image from "next/image";

const ReviewCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg w-full py-10 px-5"
        >
          <h2 className="font-bold text-2xl md:text-3xl">{item.headline}</h2>
          <p className="text-lg text-gray-500 mt-4">{item.testimonial}</p>
          <div className="flex items-center mt-12">
            <Image
              src={`/images/${item?.image}`}
              alt="生徒のプロフィール写真"
              width={80}
              height={80}
              className="rounded-full mr-3"
            />

            <div className="md:text-lg flex flex-col justify-center w-64 md:max-w-sm">
              <h3 className="font-bold text-gray-900">{item?.lessonType}</h3>
              <p className="text-gray-500">{item?.studentProfile}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewCard;
