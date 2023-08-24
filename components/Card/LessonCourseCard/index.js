// BaseCard.js
import Image from "next/image";
import Carousel from "../Carousel";
import Button from "@/components/Button";

const LessonCourseCard = ({ data }) => {
    return (
        <Carousel>
        <div className="flex flex-auto flex-col md:flex-row m-0 m-auto w-full">
            {data.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden m-4">
                    <div className="h-96 w-full relative">
                        <Image
                            src={`/images/${item.image}`}
                            alt={item.alt}
                            fill
                            className="object-center object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-gray-900 font-semibold text-lg">{item.headline}</h3>
                        <p className="text-gray-600 text-sm mt-2">{item.content}</p>
                        <div className="flex justify-start mt-5">
                        <Button className="" link={item.link}>もっと詳しく</Button>
                    </div>
                    </div>
                
                </div>
            ))}
        </div>
        </Carousel>
    );
}

export default LessonCourseCard;
