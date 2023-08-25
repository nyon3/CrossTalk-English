import Head from "next/head";
import Navbar from "@/components/Navbar/index";
import styles from "./styles.module.css";
import Footer from "./Footer";
import { GoogleAnalytics } from "nextjs-google-analytics";

// TODO - Organize this code better and use Tailwind CSS instead of CSS modules
const Layout = ({
  children,
  title = "CROSSTALK 英会話スクール",
  description = `
  岡山市北区のCrossTalk英会話スクールへようこそ！
  テキストで基本を学ぶことはもちろん
  実際の状況で使える「生きた英語」を学んで、
  あなたの夢を叶えましょう！`,
}) => {
  let structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://crosstalk.me/",
    name: "CrossTalk英会話スクール",
    // alternateName: "An Alternate Name", // 代替名があればここに書く
  };

  return (
    <>
      <GoogleAnalytics trackPageViews />
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <script
            key="jsonld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </Head>
        <Navbar />
        <main className={styles.MobileOptimized}>{children}</main>
        <Footer />
    </>
  );
};

export default Layout;
