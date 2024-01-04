// LessonCourseCard.js
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const LessonCourseCard = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row w-full gap-5 ">
      {data.map((item) => (
        <div
          key={item.id}
          className="mb-10 w-full bg-white overflow-hidden transition-opacity duration-300 hover:s "
        >
          <div className="font-bold text-2xl mb-4">
            <span className="text-sm mb-5 text-white bg-rose-600 p-1 rounded-md">
              {item.tagline}
            </span>
            <h3 className="text-3xl md:text-4xl font-bold">{item.headline}</h3>
          </div>
          <Link href={item.link}>
            <div className="relative h-72 w-full">
              <Image
                src={`/images/${item.image}`}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-md transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <p className="mt-5 text-md text-gray-500">{item.description}</p>
            {/* <button className="mt-5 bg-amber-300 p-2 rounded-md">
              learn more
            </button> */}
            <Button className="mt-5" variant="link">
              もっと詳しく
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LessonCourseCard;
