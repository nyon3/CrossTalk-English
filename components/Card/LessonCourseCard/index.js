// LessonCourseCard.js
import Image from "next/image";
import Carousel from "../Carousel";
import Link from "next/link";

const LessonCourseCard = ({ data }) => {
    return (
        <Carousel>
            <div className="flex flex-auto flex-col w-full items-center md:items-end">
                {data.map((item) => (
                    <div key={item.id} className="w-5/6 relative bg-white rounded-lg shadow-sm overflow-hidden m-4 transition-opacity duration-300 ease-in-out hover:opacity-80">
                        <Link href={item.link}>
                        <div className="relative group">
                            <div className="h-96 w-full overflow-hidden">
                                <Image
                                    src={`/images/${item.image}`}
                                    alt={item.alt}
                                    fill
                                    className="transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-2 md:p-10">
                  
                                <h3 className="text-white font-bold text-3xl mb:text-5xl mb-2">{item.headline}</h3>
                                <p className="text-white text-sm font-semibold mb-5">{item.content}</p>
                 
                            </div>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
        </Carousel>
    );
}

export default LessonCourseCard;
