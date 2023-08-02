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
import FAQAccordion from "@/components/FaqAcordion";
import SectionHeader from "@/components/SectionHeader";
import NewsSection from "@/components/NewsSection";
import InfoCard from "@/components/Card/InfoCard";
import Banner from "@/components/Banner";
// Card component for various card-based layouts
import Card from "@/components/Card";

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
        <Banner newsData={allPostsData} />
        <Jumbotron imgSrc={heroPic} imgAlt="英会話スクールで教える講師" />
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
