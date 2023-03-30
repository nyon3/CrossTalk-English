import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

// Images
import sampleImage from "../public/images/study-textbook.jpg";

// import UI components
import Layout from "@/components/layout/layout";
import CourseTarget from "@/components/UI/CourseTarget";
import CardComponent from "@/components/UI/CardComponent";
import OurAdvantages from "@/components/UI/OurAdvantages";
import ImageComponent from "@/components/UI/ImageComponent";
import PricingCard from "@/components/UI/PriceComponent";
import ImageButton from "@/components/UI/ImageButton";

export default function DiscussionLesson() {
  const contents = [
    {
      title: "実践力を身につけるディスカッション・クラス",
      content:
        "フリートークレッスンでは、参加者同士が意見交換しながら、英語でのコミュニケーションを練習することができます。話題は、最新のニュースやイベント、または日常生活での出来事など幅広く取り扱います。",
    },
    {
      title: "異なるレベルの生徒と出会う多彩なグループレッスン",
      content:
        "フリートークレッスンは、グループでのレッスン形式であるため、他の参加者とのコミュニケーションを通じて、より多くのアウトプットを得ることができます。",
    },
    {
      title: "ディスカッションならではの魅力的な特徴",
      content:
        "話題によっては、多様な文化や考え方に触れることができるため、英語力だけでなく国際感覚も身につけることができます。",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <ImageComponent
          title={"ディスカッションレッスン"}
          description={
            "フリートークレッスンは、グループで行う英会話のレッスンです。ニュースや話題となっているイベントについて話をしながら、英語でのコミュニケーションを練習していきます。"
          }
          image={sampleImage}
          alt={"sample"}
        />
        <h2>このレッスンで学べること</h2>
        <OurAdvantages color="red">自然な英語表現が学べる</OurAdvantages>
        <OurAdvantages color="orange">スピーキング力がアップする</OurAdvantages>
        <OurAdvantages>コミュニケーション力がアップする</OurAdvantages>
        <h2>特徴</h2>
        <div>
          {contents.map((content) => (
            <CardComponent
              key={content.title}
              title={content.title}
              content={content.content}
              image={sampleImage}
            />
          ))}
        </div>
        <div>
          <h2>こんな方が参加されています</h2>
          <CourseTarget
            title={"カフェな雰囲気で英語を学びたい"}
            items={[
              "英語を話す機会を増やしたい",
              "趣味や興味に関する英語表現を学びたい",
              "リラックスした雰囲気で英会話を楽しみたい",
            ]}
          />
          <CourseTarget
            title={"会話力を向上させたい"}
            items={[
              "英語で会話をすることに自信を持ちたい",
              "ニュースや人気の話題について、英語で話す機会を増やしたい",
              "英語でガイドをしたり、外国人の友人に日本文化を教えたりしたい",
            ]}
          />
        </div>
        <PricingCard />
        <ImageButton />
      </main>
    </Layout>
  );
}
