import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

import Layout from "@/components/layout/layout";
// Importing Data structure
import { getSortedPostsData } from "../lib/content";
// Importing UI Components
import OurAdvantages from "@/components/UI/OurAdvantages/index";
import Card from "@/components/UI/Card";
import Banner from "@/components/UI/Banner/index";
import FAQAccordion from "@/components/FaqAcordion";
// Importing Images
import heroPic from "../public/images/lady_practicing_her_English_pronounciation.png";

// const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const faqs = [
  {
    question: "初心者でも英会話スクールに参加できますか？",
    answer:
      "はい、もちろんです。当スクールでは、初心者から上級者まで幅広いレベルの方が参加できるグループレッスンを提供しています。初めて英語を学ぶ方にも安心してご参加いただける環境を整えております。",
  },
  // Add more FAQ objects here as needed
  {
    question: "グループレッスンの人数はどれくらいですか？",
    answer:
      "当スクールでは、グループレッスンの人数を少人数制にしています。通常は、最大6名までの生徒さんで構成されることが多いです。これにより、各生徒さんに十分な指導とサポートが提供され、効果的な学習ができる環境を作っています。",
  },
  {
    question: "英語が全く話せないのですが、大丈夫ですか？",
    answer:
      "ご心配無用です。初心者の方には特別にカリキュラムを組んでおり、基本的な英語の文法や単語から学ぶことができます。また、講師が丁寧に指導するため、英語が話せない状態からでも少しずつ上達していくことができます。",
  },
];

export default function Home({ allPostsData }) {
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

        {/* <div
          className={styles.section_heading}
          style={{
            marginBottom: "2rem",
          }}
        >
          <span>LESSONS</span>
          <p>レッスンを目的から選ぶ</p>

          <Card type="ImageFeatured" data="type1" />
        </div> */}

        <div
          className={styles.section_heading}
          style={{
            marginBottom: "2rem",
          }}
        >
          <span>LESSONS</span>
          <p>レッスンのスタイルから選ぶ</p>
          <Card type="ImageFeatured" data="type2" />
        </div>

        {/* TODO: Center the header text */}
        <div className={styles.section_heading}>
          <span>REVIEW</span>
          <p>生徒さんの声</p>
        </div>
        <Card type="review" />

        <h2>よくある質問</h2>
        {faqs.map((faq, index) => (
          <FAQAccordion
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
        {/* Changed background color */}
        <div
          className={styles.section_heading}
          style={{
            marginBottom: "2rem",
            padding: "2rem",
            backgroundColor: "#f5f5f5",
          }}
        >
          <span>NEWS</span>
          <ul>
            {allPostsData.map(({ slug, date, title }) => (
              <li
                style={{
                  listStyle: "none",
                }}
                key={slug}
              >
                <Link
                  href={`/news/${slug}`}
                  style={{
                    fontSize: "1.5rem",
                  }}
                >
                  {title}
                </Link>
                <br />
                <small>{new Date(date).toLocaleDateString()}</small>
              </li>
            ))}
          </ul>
        </div>
        <Card type="base" />
      </main>
    </Layout>
  );
}
