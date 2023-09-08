// Node.js and Libraries
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import { getSortedPostsData } from "@/lib/content";

// Components
import Layout from "@/components/Layout/layout";
import Jumbotron from "@/components/Jumbotron/jumbotron";
import FAQAccordion from "@/components/FaqAcordion";
import SectionHeader from "@/components/SectionHeader";
import NewsSection from "@/components/NewsSection";
import InfoCard from "@/components/Card/InfoCard";
import ReviewCard from '@/components/Card/ReviewCard/ReviewCard';
import LessonCourseCard from '@/components/Card/LessonCourseCard';
import Carousel from '@/components/Card/Carousel';
import Banner from '@/components/Banner';

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
<Layout 
  title="About - CROSSTALK 英会話スクール" 
  description={`岡山市北区のCrossTalk英会話スクールへようこそ！
  テキストで基本を学ぶことはもちろん
  実際の状況で使える「生きた英語」を学んで、
  あなたの夢を叶えましょう！`}
>

        <Banner newsData={allPostsData} />
        <Jumbotron content={jumbotronContent}/>
        <SectionHeader mainHeader="CrossTalkで英語が話せるようになる理由" subHeader="REASON" />
        <InfoCard data={feature} />
        <SectionHeader mainHeader="レッスンを目的から選ぶ" subHeader="LESSONS" />
        <LessonCourseCard  data={englishCourseContent}/>
        <SectionHeader mainHeader="生徒さんの声" subHeader="REVIEW" />
        <Carousel>
        <ReviewCard data={reviews}/>
        </Carousel>
        <SectionHeader mainHeader="よくある質問" subHeader="FAQ" />
        <FAQAccordion />
        <SectionHeader mainHeader="最新情報" subHeader="NEWS" />
        <NewsSection allPostsData={allPostsData} />
        {/* <Card type="base" data="tutors" showButton={false} /> */}
    </Layout>
  );
}
