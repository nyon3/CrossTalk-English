import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

// Images
import heroImage from "../public/images/andrea_teaching_640.jpg";
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

export default function GroupLesson() {
  const contents = [
    {
      title: "実践力を身につける日常英会話レッスン",
      content:
        "日常的な英会話に必要なスキルを身につけることができます。ネイティブスピーカーの英語を聞き取り、質問をする力を身につけることができます。基本的な文法を学ぶことができ、英語でのコミュニケーションに必要な発音にも焦点を当てています。",
      image: sampleImage,
    },
    {
      title: "グループレッスンならではの魅力的な特徴",
      content:
        "他の生徒とのコミュニケーションを通じて自然なコミュニケーションスキルやソーシャルスキルを向上させることができます。より多様な文化的な背景や視点を持つ人々と交流し、英語力を向上させることができます。",
      image: sampleImage2,
    },
    {
      title: "異なるレベルの生徒と出会う多彩なグループレッスン",
      content:
        "同じレベルの生徒と一緒に学ぶことができますが、時には異なるレベルの生徒とも出会うことができます。これによって、英語力を向上させるだけでなく、より多様な文化的な背景や視点を持つ人々と交流することができます。",
      image: sampleImage3,
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
          title={"日常会話グループレッスン"}
          description={
            "日常的な英会話に必要なスキルを身につけることができます。ネイティブスピーカーの英語を聞き取り、質問をする力を身につけることができます。基本的な文法を学ぶことができ、英語でのコミュニケーションに必要な発音にも焦点を当てています。"
          }
          image={heroImage}
          alt={"英会話スクールでグループレッスンをしている英会話講師の写真"}
        />
        <h2>このレッスンで学べること</h2>
        <OurAdvantages color="red">
          単語やフレーズを正しく発音する
        </OurAdvantages>
        <OurAdvantages color="orange">
          聞き取って、理解することができる
        </OurAdvantages>
        <OurAdvantages>基本的な文法を正しく使うことができる</OurAdvantages>
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
          <h2>こんな方におすすめ</h2>
          <CourseTarget
            title={"海外旅行や異文化交流"}
            items={[
              "海外旅行をしたときに、お店やレストランで英語でやり取りしたい",
              "日本の文化を外国人旅行者に教えたり、話をしたい",
              "外国人の友達を作ったり、新しい知識を得たい",
            ]}
          />
          <CourseTarget
            title={"スキルアップとして"}
            items={[
              "仕事で外国人とカジュアルなやり取りをする必要がある",
              "将来的なキャリアアップとして日常会話程度は話せるようになりたい",
              "ある程度は英語を話せるけど、もっと英語を継続的にブラッシュアップ",
            ]}
          />
        </div>
        <PricingCard />
        <ImageButton />
      </main>
    </Layout>
  );
}
