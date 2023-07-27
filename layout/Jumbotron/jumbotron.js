import styles from "./jumbotron.module.css";
import ImageWrapper from "@/components/ImageWrapper";
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

const Jumbotron = ({ imgSrc, imgAlt }) => (
  <>
    <div className={styles.hero_section}>
      <h1
        className={inter.className}
        style={{
          fontSize: "3.4rem",
          lineHeight: "0.8`",
        }}
      >
        Let&apos;s speak English
      </h1>
      <p>
        英語ができるともっと
        <br />
        人生が楽しくなる
      </p>
      <div
        style={{
          fontSize: "14px",
          fontWeight: "700",
          lineHeight: "1.8",
        }}
      >
        {`
       こんにちは！ クロストークは岡山市北区にある英会話スクールです。
       テキストで基礎から学ぶことはもちろん、生きた英語で楽しくしっかりと上達できます。 
       思い立った今がチャレンジのときです。英語を学んであなたの夢を叶えましょう！
    `}
      </div>
    </div>
    <ImageWrapper src={imgSrc} alt={imgAlt} />
  </>
);

export default Jumbotron;
