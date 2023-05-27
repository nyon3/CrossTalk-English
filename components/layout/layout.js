import Head from "next/head";
import Navbar from "@/components/UI/Navbar/index";
import styles from "./styles.module.css";
import Footer from "../UI/Footer";
import { GoogleAnalytics } from "nextjs-google-analytics";

const Layout = ({ children, title = "岡山市の英会話スクール | CrossTalkで楽しく英語を学ぶ", description = "岡山市にあるCrossTalk英会話スクールでは、楽しく英語を話すことをモットーにしています。経験豊富な講師が担当し、社会人向けの最適な内容で英会話を学べます。仕事でも活用できる英語コミュニケーション能力を身につけましょう。" }) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <div className={styles.MobileOptimized}>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
