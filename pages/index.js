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
import Layout from "@/layout/layout";
import Jumbotron from "@/layout/Jumbotron/jumbotron";
import HighlightedFeature from "@/layout/HighlightedFeature/index";
import FAQAccordion from "@/UI/FaqAcordion";
import SectionHeader from "@/components/SectionHeader";
import NewsSection from "@/UI/News";
import InfoCard from "@/UI/Card/InfoCard";

// Card component for various card-based layouts
import Card from "@/UI/Card";

// Importing data fetching function
import { getSortedPostsData } from "../lib/content";

// Importing images
import heroPic from "../public/images/andrea_teaching_640x360.jpg";

// Fetching data during build time
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const englishCourseContent = [
  {
    title: "少人数制で会話量が多い",
    description: "少人数制のクラスで、豊富な会話の機会を提供します。",
  },
  {
    title: "経験豊富な講師",
    description: "経験豊富な講師があなたの学習をサポートします。",
  },
  {
    title: "アットホームな雰囲気",
    description: "楽しみながら学べるアットホームな雰囲気を提供します。",
  },
];

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <main className={styles.wrapper}>
        {/* <Banner /> */}
        <Jumbotron
          imgSrc={heroPic}
          imgAlt="英会話スクールで発音の練習をしている女性"
          headline="英語ができると\nもっと人生が\n楽しくなる"
          content="クロストークは岡山市北区にある英会話スクールです。テキストで基本を学ぶことはもちろん、生きた英語で、楽しくしっかりと上達できます！思い立った今が、チャレンジのときです。英語を学んで、あなたの夢を叶えましょう！"
        />
        <SectionHeader
          mainHeader="CrossTalkで英語が話せるようになる理由"
          subHeader={"REASON"}
        />
        <InfoCard cardContent={englishCourseContent} />
        <SectionHeader
          mainHeader="レッスンを目的から選ぶ"
          subHeader={"LESSONS"}
        />
        <Card type="base" data="params" dataType="type2" />
        <SectionHeader mainHeader="生徒さんの声" subHeader={"REVIEW"} />
        <Card type="review" data="reviews" />
        <SectionHeader mainHeader="よくある質問" subHeader={"FAQ"} />
        <FAQAccordion />
        <SectionHeader mainHeader="最新情報" subHeader={"NEWS"} />
        <NewsSection allPostsData={allPostsData} />
        <Card type="base" data="tutors" showButton={false} />
      </main>
    </Layout>
  );
}
