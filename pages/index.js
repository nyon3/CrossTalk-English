// Node.js and Libraries
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { getSortedPostsData } from "../lib/content";

// Components
import Layout from "@/components/layout";
import Jumbotron from "@/components/Jumbotron/jumbotron";
import FAQAccordion from "@/components/FaqAcordion";
import SectionHeader from "@/components/SectionHeader";
import NewsSection from "@/components/NewsSection";
import InfoCard from "@/components/Card/InfoCard";
import Banner from "@/components/Banner";
import Card from "@/components/Card/BaseCard"; // You might want to be explicit about which card type this is if you have multiple.
import ReviewCard from '@/components/Card/ReviewCard/ReviewCard';
import LessonCourseCard from '@/components/Card/LessonCourseCard';
// Assets
import mainPic from "@/public/images/andrea_teaching_640.jpg";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  
  const jumbotronContent = yaml.load(fs.readFileSync(path.resolve(process.cwd(), 'content', 'school', 'jumbotronContent.yaml'), 'utf8'));
  const englishCourseContent = yaml.load(fs.readFileSync(path.resolve(process.cwd(), 'content', 'school', 'englishCourseContent.yaml'), 'utf8'));
  const feature = yaml.load(fs.readFileSync(path.resolve(process.cwd(), 'content', 'school', 'feature.yaml'), 'utf8'));
  const reviews = yaml.load(fs.readFileSync(path.resolve(process.cwd(), 'content', 'school', 'reviews.yaml'), 'utf8'));
  return {
    props: {
      feature,
      reviews,
      allPostsData,
      jumbotronContent,
      englishCourseContent,
    },
  };
}

export default function Home({ allPostsData, jumbotronContent, feature, englishCourseContent, reviews }) {
  return (
    <Layout>
        {/* <Banner newsData={allPostsData} /> */}
        <Jumbotron content={jumbotronContent}/>
        <SectionHeader mainHeader="CrossTalkで英語が話せるようになる理由" subHeader="REASON" />
        <InfoCard data={feature} />
        <SectionHeader mainHeader="レッスンを目的から選ぶ" subHeader="LESSONS" />
        <LessonCourseCard  data={englishCourseContent}/>
        <SectionHeader mainHeader="生徒さんの声" subHeader="REVIEW" />
        <ReviewCard data={reviews}/>
        <SectionHeader mainHeader="よくある質問" subHeader="FAQ" />
        <FAQAccordion />
        <SectionHeader mainHeader="最新情報" subHeader="NEWS" />
        <NewsSection allPostsData={allPostsData} />
        {/* <Card type="base" data="tutors" showButton={false} /> */}
    </Layout>
  );
}
