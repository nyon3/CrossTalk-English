// pages/[course].js
import React from "react";
import Image from "next/image";
import Layout from "@/components/layout/layout";
import { getCourseData, getSortedCoursesData } from "@/lib/courses";
import styles from "@/styles/lesson.module.css";
import TrialSignUp from "@/components/UI/TrialSignUp";
import PricingCard from "@/components/UI/PriceComponent";
import ImageWrapper from "@/components/UI/ImageWrapper";

const CoursePage = ({ courseData }) => {
  // Here you can add any design logic based on the courseData
  const { title, headline, subheadline } = courseData;

  return (
    <Layout>
      <main>
        <div className={styles.course}>
          <div>{title}</div>
          <h4>
            {headline.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h4>
          <p>{subheadline}</p>
          <ImageWrapper
            src={`/images/${courseData.image}`}
            alt={courseData.title}
          />
          <h1>{courseData.title}</h1>
          {/* <span>Instructor: {courseData.instructor}</span> */}
          <div dangerouslySetInnerHTML={{ __html: courseData.contentHtml }} />
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
