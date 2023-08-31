// BaseCard.js
import Image from "next/image";

// TODO Photo aspect ratio is not consistent
const BaseCard = ({ data }) => {
  return (
    <div className="flex flex-auto flex-col md:flex-row m-0">
      {data.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden m-4">
          <div className="h-64 w-full">
            <Image
              src={`/images/${item.image}`}
              alt={item.alt}
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-medium mb-2">{item.headline}</h3>
            <p className="text-gray-600 text-base">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BaseCard;
