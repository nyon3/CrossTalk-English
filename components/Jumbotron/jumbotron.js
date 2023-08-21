import styles from "./jumbotron.module.css";
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


const Jumbotron = ({ content }) => (
  <>
    <div className={styles.hero_section}>
      <h1 className={inter.className} style={{ fontSize: "3.4rem", lineHeight: "1.2" }}>
        {content.title}
      </h1>
      <p>
        {content.subtitle}
      </p>
      <div style={{ fontSize: "14px", fontWeight: "700", lineHeight: "1.8" }}>
        {content.description}
      </div>
    </div>
  </>
);


export default Jumbotron;
