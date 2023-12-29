// LessonCourseCard.js
import Image from "next/image";
import Link from "next/link";

const LessonCourseCard = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-4 ">
      {data.map((item) => (
        <div
          key={item.id}
          className="mb-10 w-full bg-white overflow-hidden transition-opacity duration-300 hover:opacity-80"
        >
          <Link href={item.link}>
            <div className="relative h-96 w-full">
              <Image
                src={`/images/${item.image}`}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-md transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="font-bold text-2xl mt-4">
              <h3 className="">{item.headline}</h3>
              <p className="mt-5">{item.content}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LessonCourseCard;
