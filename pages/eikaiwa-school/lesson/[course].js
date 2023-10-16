// pages/[course].js
import React from "react";
import Layout from "@/components/Layout/layout";
import { getCourseData, getSortedCoursesData } from "@/lib/courses";
import PricingCard from "@/components/PriceComponent";
import TrialFlow from "@/components/TrialFlow/index";
import InfoCard from "@/components/Card/IconicInfoBox";

// Use Tailwind CSS to style this page
const CoursePage = ({ courseData }) => {
  // Here you can add any design logic based on the courseData
  const { features, title } =
    courseData;

  return (
    <Layout>
      <main>
        <div className="mt-20">
          <h2 className="md:text-5xl text-4xl text-rose-500 font-bold mb-4">{title}</h2>
          <div className="markdown-content" dangerouslySetInnerHTML={{ __html: courseData.contentHtml }}></div>

          <div className="">
          <h3 className="mt-10 text-6xl font-semibold text-rose-600">Features</h3>
          <p className="text-lg mt-3">このレッスンで学べること</p>
        </div>
          <InfoCard data={features} />
          <div className="">
          <h3 className="mt-10 text-6xl font-semibold text-rose-600">Course fee</h3>
          <p className="text-lg mt-3">レッスンは50分のレッスン x 4回/月</p>
          <span className="mt-4 text-lg"></span>
        </div>
            <PricingCard courseType={courseData.type} />
            <div className="">
        <h3 className="mt-10 text-6xl font-semibold text-rose-600">Trial</h3>
      <p className="text-lg mt-3">体験レッスン</p>
      </div>
          <TrialFlow />
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          ></div>
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  // Fetch all course slugs
  const allCoursesData = getSortedCoursesData();
  const paths = allCoursesData.map(({ slug }) => ({
    params: { course: slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the course based on params.course
  const courseData = await getCourseData(params.course);
  return { props: { courseData } };
}

export default CoursePage;
