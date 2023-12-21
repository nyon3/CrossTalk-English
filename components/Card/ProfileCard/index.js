// BaseCard.js
import Image from "next/image";

// TODO Photo aspect ratio is not consistent
const ProfileCard = ({ data }) => {
  return (
    <div className="flex flex-auto flex-col md:flex-row m-0">
      <div className="flex flex-col flex-1 justify-center items-center">
        <p className="text-lg font-bold">
          当スクールでは、私たち二人の講師が、あなたの英会話の学びを全力でサポートします。私たちは大きなスクールのような多くの講師はいませんが、その分一人ひとりの生徒さんと密にコミュニケーションを取りながら、楽しく英会話を学べる環境を提供しています
        </p>
      </div>
      {data.map((item) => (
        // TODO: flex-col is not working for mobile view
        <div
          key={item.id}
          className=" flex flex-1 rounded-lg shadow-lg overflow-hidden m-4 justify-center"
        >
          <Image
            src={`/images/${item.avatar}`}
            alt={item.alt}
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
