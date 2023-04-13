import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

// Images
import heroImage from "../public/images/concept_orange_scrabble_P.png";
import sampleImage from "../public/images/dice_letters_teach.jpg";
import ImageConceptBeginner from "../public/images/image_concept_beginner.jpg";
import imageConceptCustomLesson from "../public/images/image_concept_custom_lesson.jpg";

// import UI components
import Layout from "@/components/layout/layout";
import CourseTarget from "@/components/UI/CourseTarget";
import CardComponent from "@/components/UI/CardComponent";
import OurAdvantages from "@/components/UI/OurAdvantages";
import ImageComponent from "@/components/UI/FeaturedHeader";
import PricingCard from "@/components/UI/PriceComponent";
import ImageButton from "@/components/UI/TrialSignUp";

export default function PrivateLesson() {
  const contents = [
    {
      title: "コミュニケーション多さ",
      content:
        "生徒さんと講師との密なコミュニケーションができるのが、プライベートレッスンの大きな特徴です。生徒さんが抱える課題や疑問点をすぐに解決することができ、細かいところまで理解を深めることができます。また、講師が生徒さんの学習状況を把握し、適切なアドバイスやフィードバックを提供することで、より効果的な学習をサポートします。",
      image: sampleImage,
    },
    {
      title: "初心者でも安心",
      content:
        "英会話スクールでは、上級者だけがプライベートレッスンを受けられると思われがちですが、実は初心者からでもプライベートレッスンを受けることができます。プライベートレッスンは、個別に講師と対話しながら英語力を向上させることができ、自分にあったペースで学習できるため、初心者の方にもおすすめです。",
      image: ImageConceptBeginner,
    },
    {
      title: "あなたに合わせた学習方針",
      content:
        "私たちの英会話スクールでは、生徒さんのレベルやニーズに合わせたカリキュラムを提供しています。プライベートレッスンなので、生徒さん一人ひとりの英語力に合わせた最適な学習環境を提供し、自分のペースで学習することができます。そのため、効率的に英語力を向上させることができます。",
      image: imageConceptCustomLesson,
    },
  ];

  return (
    <Layout>
      <main className={styles.container}>
        <ImageComponent
          title={"プライベートレッスン"}
          description={
            "プライベートレッスンは、生徒さんのニーズに合わせて、スキルアップが可能です。また、1対1の授業形式であるため、生徒さんの課題や疑問点をすぐに解決することができます。"
          }
          image={heroImage}
          alt={"プライベートレッスン"}
        />
        <h2>このレッスンで学べること</h2>
        <OurAdvantages color="red">会話力の向上</OurAdvantages>
        <OurAdvantages color="orange">発音の改善</OurAdvantages>
        <OurAdvantages>文法の理解</OurAdvantages>
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
            title={"大人になって英語を再チャレンジ"}
            items={[
              "海外旅行で現地の人と交流を深めたい",
              "自分のペースに合わせて学習したい",
              "大人になっても新しい知識を得たい",
            ]}
          />
          <CourseTarget
            title={"スキルアップとして"}
            items={[
              "仕事で外国人とカジュアルなやり取りをする必要がある",
              "ワーキングホリデーのために集中的に勉強したい",
              "ある程度は英語を話せるけど、もっと英語をブラッシュアップ",
            ]}
          />
        </div>
        <PricingCard />
        <ImageButton />
      </main>
    </Layout>
  );
}
