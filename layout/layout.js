import Head from "next/head";
import Navbar from "@/UI/Navbar/index";
import styles from "./styles.module.css";
import Footer from "../UI/Footer";
import { GoogleAnalytics } from "nextjs-google-analytics";

const Layout = ({
  children,
  title = "岡山市の英会話スクール | CrossTalkで楽しく英語を学ぶ",
  description = "岡山市にあるCrossTalk英会話スクールでは、楽しく英語を話すことをモットーにしています。",
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
      <div className={styles.MobileOptimized}>
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
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
