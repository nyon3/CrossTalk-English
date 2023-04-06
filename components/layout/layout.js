import Head from "next/head";
import Navbar from "@/components/Navbar/index";
import styles from "./styles.module.css";
import Footer from "../Footer";

const Layout = ({ children, page }) => {
  let title, description;

  switch (page) {
    case "groupLesson":
      title = "CrossTalk | 岡山市の英会話グループレッスンでスキルアップ";
      description =
        "CrossTalk英会話で楽しく日常英会話スキルを習得！岡山のグループレッスンで、ネイティブの英語聞き取り、質問力向上、基本文法と発音を学び、英語コミュニケーションを身につけよう。";
      break;
    case "discussionLesson":
      title =
        "岡山市で英語を学ぶ | CrossTalkのディスカッションでフリートーク練習";
      description =
        "CrossTalk岡山でのディスカッションレッスンで、英語フリートークを楽しみながら、ニュースや話題のイベントについて話し、英語コミュニケーションスキルを向上。初心者から大歓迎！";
      break;
    case "privateLesson":
      title = "CrossTalk | 岡山市で英語力向上のプライベートレッスン";
      description =
        "CrossTalk英会話ではではプライベートレッスンで、個々のニーズに合わせた英語力アップが可能。1対1授業形式で、課題や疑問点を解決し、英語力を効率的に向上させよう。初心者から歓迎！";
      break;
    default:
      title = "岡山市の英会話スクール | CrossTalkで楽しく英語を学ぶ";
      description =
        "岡山市にあるCrossTalk英会話スクールでは、楽しく英語を話すことをモットーにしています。経験豊富な講師が担当し、社会人向けの最適な内容で英会話を学べます。仕事でも活用できる英語コミュニケーション能力を身につけましょう。";
  }

  return (
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
  );
};

export default Layout;
