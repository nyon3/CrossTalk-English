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
// HACK: I need to figure out a bette way to code this hero component
// For now the gap between the image and the text is cotoled by the flexbox and gap values
// And it's kinda off set on desktop and tablet screen sizes
const Jumbotron = ({ content }) => (
  <div className="flex flex-col items-center md:gap-32 md:flex-row pt-5 md:pt-20">
    <div className="flex-1 md:max-w-md">
      <h1 className={inter.className + " text-5xl font-bold leading-tight"}>
        {content.title}
      </h1>
      <p className="text-2xl font-bold my-3">{content.subtitle}</p>
      <div className="text-md font-bold leading-relaxed">
        {content.description}
      </div>
    </div>
    <div className="flex-1 md:max-w-xs overflow-hiddenjustify-center items-center">
      <Image
        src={`/images/${content.src}`}
        alt={content.alt}
        width={1000}
        height={1000}
        className="md:ml-0 mt-5 md:mt-0 rounded-lg"
      />
    </div>
  </div>
);

export default Jumbotron;
