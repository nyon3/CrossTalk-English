// BaseCard.js
import Image from "next/image";

// TODO Photo aspect ratio is not consistent
const ProfileCard = ({ data }) => {
  return (
    <div className="flex flex-auto flex-col md:flex-row m-0">
      {data.map((item) => (
        // TODO: flex-col is not working for mobile view
        <div key={item.id} className="bg-gray-100 flex flex-1 rounded-lg shadow-lg overflow-hidden m-4 justify-center">
          <div className="h-32 pt-4 pl-4">
            <Image
              src={`/images/${item.avatar}`}
              alt={item.alt}
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-full"
            />
          </div>
          <div className="w-2/3 p-4">
            <h3 className="text-xl font-medium mb-2">{item.headline}</h3>
            <p className="text-gray-600 text-base">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileCard;
