/**
 * Home Page
 *
 * This is the main page component of the application. It includes several other reusable
 * components to create a structured and visually appealing layout. The data used in this
 * component is fetched during build time using Next.js's getStaticProps.
 *
 * @component
 * @prop {Array} allPostsData - An array of post data fetched from the getStaticProps function.
 */

import styles from "@/styles/Home.module.css";

// Layout Components
import Layout from "@/components/layout";
import Jumbotron from "@/components/Jumbotron/jumbotron";
import NewsSection from "@/components/NewsSection";
import Banner from "@/components/Banner";
import EpisodesList from "@/components/EpisodesList";
import FeedbackSection from "@/components/FeedbackSection";
import Parser from "rss-parser"; // 追加
import ImageWrapper from "@/components/ImageWrapper";
// Card component for various card-based layouts
import Card from "@/components/Card";

// Importing data fetching function
import { getSortedPostsData } from "../../lib/content";

// Importing images
import heroPic from "../../public/images/podcasting.jpg";

// RSS フィードの解析のためのパーサー
const parser = new Parser();

// Fetching data during build time
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  // RSS データの取得
  const url = "https://anchor.fm/s/13a00fc4/podcast/rss";
  const feed = await parser.parseURL(url);

  // Cut the content of each episode to the first 120 characters and get the first 5
  const topEpisodes = feed.items
    .map((episode) => {
      return {
        ...episode,
        content: episode.content.substring(0, 120) + "...", // adding '...' to indicate that text is truncated
      };
    })
    .slice(0, 5);

  return {
    props: {
      allPostsData,
      topEpisodes, // propsとして追加
    },
  };
}

export default function Home({ allPostsData, topEpisodes }) {
  // topEpisodes を受け取る
  return (
    <Layout>
      <main className={styles.wrapper}>
        <Banner newsData={allPostsData} />
        <Jumbotron
          headline={"English Your Way"}
          body={
            "CrossTalk.FMは海外カルチャーと英語を楽しみながら学ぶためのポッドキャストです。日々の生活から得た心温まるエピソードや感動的なストーリー、そしてちょっとした驚きを詰め込んだこのポッドキャストを、英語と日本語のフリースタイルでお届けします。"
          }
          imgSrc={heroPic}
          imgAlt={"A person recording a podcast"}
        />
        <NewsSection allPostsData={allPostsData} />
        <FeedbackSection />
        {/* EpisodesList を使用してトップ5エピソードを表示 */}
        <EpisodesList episodes={topEpisodes} />
        <Card type="base" data="tutors" showButton={false} />
      </main>
    </Layout>
  );
}
