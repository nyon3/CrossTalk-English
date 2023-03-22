import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import testPic from "../public/study-textbook.jpg"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Image 
        src={testPic}
        alt="tes"/>
        <h2 className={styles.heading}>Welcome to Language School</h2>
        <p className={styles.intro}>
          We offer a wide range of language courses for students of all levels.
          Our experienced teachers and engaging curriculum will help you reach
          your language learning goals.
        </p>
        <a href="/courses" className={styles.cta}>
          Explore Courses
        </a>
      </main>
    </>
  );
}
