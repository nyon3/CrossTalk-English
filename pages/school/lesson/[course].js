// pages/[course].js
import React from "react";
import Layout from "@/components/Layout/layout";
import { getCourseData, getSortedCoursesData } from "@/lib/courses";
import Image from "next/image";
import styles from "./lesson.module.css";
import PricingCard from "@/components/PriceComponent";
import TrialFlow from "@/components/TrialFlow/index";
import SectionHeader from "@/components/SectionHeader";
import InfoCard from "@/components/Card/InfoCard";

// Use Tailwind CSS to style this page
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
          <Image src={`/images/${image}`} alt={courseData.title}  width={500} height={500}/>
          {/* <FeatureSection title="Features" data={features} background="#fff" /> */}
          <SectionHeader
            mainHeader={"このレッスンで学べること"}
            subHeader={"Features"}
          />
          <InfoCard data={features} />
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
