// pages/[course].js
import React from "react";
import Layout from "@/layout/layout";
import { getCourseData, getSortedCoursesData } from "@/lib/courses";
import styles from "./lesson.module.css";
import TrialSignUp from "@/UI/TrialSignUp";
import PricingCard from "@/UI/PriceComponent";
import ImageWrapper from "@/components/ImageWrapper";
import FeatureSection from "@/layout/SubPage_feature/feature";
import HighlightedFeatureList from "@/layout/HighlightedFeature/index";
import TrialFlow from "@/layout/TrialFlow/index";
import SectionHeader from "@/components/SectionHeader";
import InfoCard from "@/UI/Card/InfoCard";

const CoursePage = ({ courseData }) => {
  // Here you can add any design logic based on the courseData
  const { title, headline, subheadline, image, RecommendedFor, features } =
    courseData;

  return (
    <Layout>
      <main>
        <div className={styles.wrapper}>
          <SectionHeader mainHeader={headline} subHeader={title} />
          <p className={styles.description}>{subheadline}</p>
          <ImageWrapper src={`/images/${image}`} alt={courseData.title} />
          {/* <FeatureSection title="Features" data={features} background="#fff" /> */}
          <SectionHeader
            mainHeader={"このレッスンで学べること"}
            subHeader={"Features"}
          />
          <InfoCard cardContent={features} />
          {/* <div className={styles.title}>Recommended For</div>
          <h3 className={styles.headline}>こんな方におすすめ</h3>
          <HighlightedFeatureList config={RecommendedFor} /> */}
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PricingCard courseType={courseData.type} />
          </div>
          <TrialFlow />
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <TrialSignUp /> */}
          </div>
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
