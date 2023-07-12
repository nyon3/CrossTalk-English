// pages/[course].js
import React from "react";
import Layout from "@/components/layout/layout";
import { getCourseData, getSortedCoursesData } from "@/lib/courses";
import styles from "./lesson.module.css";
import TrialSignUp from "@/components/UI/TrialSignUp";
import PricingCard from "@/components/UI/PriceComponent";
import ImageWrapper from "@/components/UI/ImageWrapper";
import FeatureSection from "@/components/layout/SubPage_feature/feature";
import HighlightedFeatureList from "@/components/layout/HighlightedFeature/index";

const CoursePage = ({ courseData }) => {
  // Here you can add any design logic based on the courseData
  const { title, headline, image, features, RecommendedFor } = courseData;

  return (
    <Layout>
      <main>
        <div className={styles.wrapper}>
          <div>{title}</div>
          <h2>
            {headline.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
          <ImageWrapper src={`/images/${image}`} alt={courseData.title} />
          <FeatureSection title="Features" data={features} background="#fff" />
          {/* Markdown */}
          {/* <span>Instructor: {courseData.instructor}</span> */}
          <div className={styles.title}>Recommended For</div>
          <h3 className={styles.headline}>こんな方におすすめ</h3>

          <HighlightedFeatureList config={RecommendedFor} />
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <PricingCard courseType={courseData.type} />
          </div>
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TrialSignUp />
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
