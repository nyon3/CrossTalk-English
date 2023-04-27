import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

import Layout from "@/components/layout/layout";

// Importing UI Components
import OurAdvantages from "@/components/UI/OurAdvantages/index";
import Card from "@/components/UI/LessonCoursesCard/index";
import StuffComponent from "@/components/UI/stuffComponent";
import Banner from "@/components/UI/Banner/index";
import CustomerReview from "@/components/UI/CustomerReview";
// Importing Images
import heroPic from "../public/images/lady_practicing_her_English_pronounciation.png";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main className={styles.container}>
        <Banner />
        <div className={styles.jumbotron}>
          <Image
            src={heroPic}
            alt="英会話スクールで発音の練習をしている女性"
            width={800}
            height={800}
            sizes="(max-width: 768px) 100vw,(max-width: 1024px)70vw"
            style={{
              height: "auto",
              width: "100%",
              maxHeight: "100vh",
              marginBottom: "2rem",
            }}
          />
          <div className={styles.jumbotron_content}>
            <h1>
              英語ができると
              <br />
              もっと人生が <br />
              楽しくなる
            </h1>
          </div>
          <div>
            <p>
              クロストークは岡山市北区にある英会話スクールです。テキストで基本を学ぶことはもちろん、生きた英語で、楽しくしっかりと上達できます！思い立った今が、チャレンジのときです。英語を学んで、あなたの夢を叶えましょう！
            </p>
          </div>
        </div>
        {/* <Link href="/news">NEWS</Link> */}
        <div className={styles.section_heading}>
          <span>RESON</span>
          <p>
            CrossTalkで英語が
            <br />
            話せるようになる理由
          </p>
        </div>
        <div>
          <OurAdvantages color="red">
            少人数制で
            <br />
            会話量が多い
          </OurAdvantages>
          <OurAdvantages color="orange">
            経験豊富な
            <br />
            外国人講師
          </OurAdvantages>
          <OurAdvantages>
            アットホーム
            <br />
            な空間
          </OurAdvantages>
        </div>
        {/* TODO: Center the header text */}
        <div className={styles.section_heading}>
          <span>REVIEW</span>
          <p>生徒さんの評价</p>
          <CustomerReview />
        </div>
        <div className={styles.section_heading}>
          <span>LESSONS</span>
          <p>
            初心者から上級者まで、それぞれのレベルに
            <br />
            合わせたレッスンプラン
          </p>
        </div>
        <Card />
        <StuffComponent />
      </main>
    </Layout>
  );
}
