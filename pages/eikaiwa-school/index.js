// Node.js and Libraries
import fs from "fs";
import yaml from "js-yaml";
import path from "path";
import { getSortedPostsData } from "@/lib/news";

// Components
import Layout from "@/components/Layout/layout";
import Jumbotron from "@/components/Jumbotron/jumbotron";
import FAQAccordion from "@/components/FaqAcordion";
import ContentSection from "@/components/ContentSection";
import InfoCard from "@/components/Card/IconicInfoBox";
import ReviewCard from "@/components/Card/ReviewCard/ReviewCard";
import LessonCourseCard from "@/components/Card/LessonCourseCard";
import TrialFlow from "@/components/TrialFlow";
import TeamComponent from "@/components/Card/TeamComponent";
// import Banner from "@/components/Banner";

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData("news");
  const newsPostsData = getSortedPostsData("blog");

  const jumbotronContent = yaml.load(
    fs.readFileSync(
      path.resolve(process.cwd(), "content", "school", "jumbotronContent.yaml"),
      "utf8"
    )
  );
  const englishCourseContent = yaml.load(
    fs.readFileSync(
      path.resolve(
        process.cwd(),
        "content",
        "school",
        "englishCourseContent.yaml"
      ),
      "utf8"
    )
  );
  const feature = yaml.load(
    fs.readFileSync(
      path.resolve(process.cwd(), "content", "school", "feature.yaml"),
      "utf8"
    )
  );
  const reviews = yaml.load(
    fs.readFileSync(
      path.resolve(process.cwd(), "content", "school", "reviews.yaml"),
      "utf8"
    )
  );
  const faq = yaml.load(
    fs.readFileSync(
      path.resolve(process.cwd(), "content", "school", "faq.yaml"),
      "utf8"
    )
  );
  return {
    props: {
      feature,
      reviews,
      newsPostsData,
      jumbotronContent,
      englishCourseContent,
      faq,
    },
  };
}

// Tutors data for Tomoya and Andrea
const profileData = [
  {
    id: 1,
    image: "andrea.jpg",
    name: "Andrea",
    bio: "英会話講師としても20年以上の経験があり、日本人の英語上達するためのポイントを熟知しています",
    likes: "Likes: 動物",
    dislikes: "Dislikes: 暑い日、渋滞",
    hobbies: "Hobbies: メルカリ",
  },
  {
    id: 2,
    image: "tomoya.jpg",
    name: "Tomoya",
    bio: "オーストラリアで１年間働いていました。初心者向けのプライベートレッスンレッスンを担当しています。",
    likes: "Likes: ラーメン",
    dislikes: "Dislikes: 虫",
    hobbies: "Hobbies: アニメ、ゲーム",
  },
  // more profiles...
];

export default function Home({
  jumbotronContent,
  feature,
  englishCourseContent,
  reviews,
  faq,
  newsPostsData,
}) {
  return (
    <Layout>
      {/* <Banner newsData={allPostsData} /> */}
      <Jumbotron content={jumbotronContent} />
      <div className="">
        <h3 className="mt-10 text-6xl font-semibold">REASON</h3>
        <p className="text-2xl mt-3">CrossTalkで英語が話せるようになる理由</p>
      </div>

      <InfoCard data={feature} />
      <div className="">
        <h3 className="mt-10 text-5xl md:text-6xl font-semibol">ABOUT US</h3>
        <p className="text-sm md:text-lg mt-3 text-gray-500">
          Learn more about our mission and values.
        </p>
      </div>

      <TeamComponent tutors={profileData} />
      <div className="">
        <h3 className="mt-10 text-5xl md:text-6xl font-semibol">LESSONS</h3>
        <p className="text-sm md:text-lg mt-3 text-gray-500">
          レッスンを目的から選ぶ
        </p>
      </div>

      <LessonCourseCard data={englishCourseContent} />

      <div className="">
        <h3 className="mt-10 text-5xl md:text-6xl font-semibol">REVIEWS</h3>
        <p className="text-sm md:text-lg mt-3 text-gray-500">
          Student Testimonials: Their Learning Experiences
        </p>
      </div>

      <ReviewCard data={reviews} />

      <div className="md:flex md:flex-1 md:justify-evenly">
        <div className="">
          <h3 className="mt-10 text-6xl font-semibol">FAQ</h3>
          <p className="text-lg mt-3">よくある質問</p>
        </div>
        <FAQAccordion data={faq} />
      </div>
      <div className="">
        <div>
          <h3 className="mt-10 text-6xl font-semibol">NEWS</h3>
          <p className="text-lg mt-3">最新情報について</p>
        </div>
        <ContentSection
          baseRoute="eikaiwa-school"
          contentType="posts"
          postsData={newsPostsData}
        />
      </div>
      <div className="">
        <h3 className="mt-10 text-6xl font-semibol">Trial</h3>
        <p className="text-lg mt-3">体験レッスン</p>
      </div>
      <TrialFlow />
      {/* <Card type="base" data="tutors" showButton={false} /> */}
    </Layout>
  );
}
