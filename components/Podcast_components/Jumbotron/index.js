import Image from "next/image";

// import { inter } from "@/components/Fonts";
/**
 * Jumbotron Component
 *
 * This component serves as the "hero" or primary banner for the webpage. It contains an image and
 * a headline text, styled in a manner to draw users' attention to the most important piece of information.
 *
 * @component
 * @prop {string} imgSrc - The source URL of the image to be displayed.
 * @prop {string} imgAlt - The alt text for the image, important for SEO and accessibility.
 */
import { Inter } from "next/font/google";

const inter = Inter({
    weight: "700",
    subsets: ["latin"],
});

const Jumbotron = ({ data }) => (
    <div className="flex flex-col md:flex-row pt-5 md:pt-20">
         <div className="w-44 md:w-1/2 md:pr-10 overflow-hidden flex justify-center items-center text-center">
            <Image
                src={`/images/${data.src}`}
                alt="英会話スクールで教える講師"
                width={1000}
                height={1000}
                className="md:ml-0 mt-5 md:mt-0 rounded-lg"
            />
        </div>
        <div className="md:w-1/2">
            <h1 className={inter.className + " text-5xl font-bold leading-tight"}>
                {data.title}
            </h1>
            <p className="text-2xl mb-3">{data.subtitle}</p>
            <div className="text-md font-bold leading-relaxed">
                {data.description}
            </div>
        </div>
     
    </div>
);

export default Jumbotron;
