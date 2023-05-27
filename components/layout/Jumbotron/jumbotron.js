import Image from "next/image";
import styles from "./jumbotron.module.css";
import HeadlineComponent from "./headline";

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

const Jumbotron = ({ imgSrc, imgAlt }) => (
  <>
    <div className={styles.jumbotron}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={800}
        height={800}
        sizes="(max-width: 768px) 100vw,(max-width: 1024px)70vw"
        style={{
          height: "auto",
          width: "100%",
          maxHeight: "100vh",
        }}
      />
      <div className={styles.jumbotron_content}>
        <HeadlineComponent
          headline={["英語ができると", "もっと人生が", "楽しくなる"]}
        />
      </div>
    </div>
    <p>
      クロストークは岡山市北区にある英会話スクールです。テキストで基本を学ぶことはもちろん、生きた英語で、楽しくしっかりと上達できます！思い立った今が、チャレンジのときです。英語を学んで、あなたの夢を叶えましょう！
    </p>
  </>
);

export default Jumbotron;
