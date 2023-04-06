import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

// Images
import heroImage from "../public/images/concept_blueback_scrabble_G.png";
import sampleImage from "../public/images/dice_letters_teach.jpg";
import sampleImage2 from "../public/images/friendly.jpg";
import sampleImage3 from "../public/images/sign_board_destination.jpg";

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
      image: sampleImage,
    },
    {
      title: "異なるレベルの生徒と出会う多彩なグループレッスン",
      content:
        "フリートークレッスンは、グループでのレッスン形式であるため、他の参加者とのコミュニケーションを通じて、より多くのアウトプットを得ることができます。",
      image: sampleImage2,
    },
    {
      title: "ディスカッションならではの魅力的な特徴",
      content:
        "話題によっては、多様な文化や考え方に触れることができるため、英語力だけでなく国際感覚も身につけることができます。",
      image: sampleImage3,
    },
  ];

  return (
    <Layout>
      <main className={styles.container}>
        <ImageComponent
          title={"ディスカッションレッスン"}
          description={
            "フリートークレッスンは、グループで行う英会話のレッスンです。ニュースや話題となっているイベントについて話をしながら、英語でのコミュニケーションを練習していきます。"
          }
          image={heroImage}
          alt={"ディスカッションレッスン"}
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
              image={content.image}
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
