import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

// Images
import heroImage from "../public/images/concept_redback_scrabble_C.png";
import sampleImage from "../public/images/dice_letters_teach.jpg";
import sampleImage2 from "../public/images/friendly.jpg";
import sampleImage3 from "../public/images/sign_board_destination.jpg";

// import UI components
import Layout from "@/components/layout/layout";
import CourseTarget from "@/components/UI/LessonCandidates";
import CardComponent from "@/components/UI/CardComponent";
import OurAdvantages from "@/components/UI/OurAdvantages";
import ImageComponent from "@/components/UI/FeaturedHeader";
import PricingCard from "@/components/UI/PriceComponent";
import ImageButton from "@/components/UI/TrialSignUp";
import WeeklyCalendar from "@/components/UI/WeeklyCalendar";
import FAQAccordion from "@/components/FaqAcordion";
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

const lessonData = {
  月: {
    "15:30-16:30": "初心者",
    "18:00-19:00": "上級者",
    "19:30-20:30": "初心者",
  },
  火: {
    "14:00-15:00": "初心者",
    "18:00-19:00": "初心者",
    "19:30-20:30": "上級者",
  },
  水: {
    "15:30-16:20": "初心者",
  },
  木: {
    "15:00-15:50": "プライベート",
    "16:30-17:20": "上級者",
    "18:00-18:50": "初心者",
  },
  金: {
    "13:30-14:20": "上級者",
    "15:00-15:50": "初心者",
    "16:30-17:20": "プライベート",
    "18:30-19:20": "プライベート",
  },
  土: {
    "11:00-11:50": "プライベート",
    "12:30-13:20": "初心者",
  },
};

export default function GroupLesson() {
  const contents = [
    {
      title: "コミュニケーションを重視したレッスン",
      content:
        "インタラクティブなアクティビティやディスカッションを通じて、コミュニケーション力を鍛えることを重視した英会話レッスンで、実際の状況で英語を活用する自信を育てます。",
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
      <main className={styles.container}>
        <ImageComponent
          title={"英会話グループレッスン"}
          description={
            "CrossTalk英会話で楽しく日常英会話スキルを習得！岡山のグループレッスンで、ネイティブの英語聞き取り、質問力向上、基本文法と発音を学び、英語コミュニケーションを身につけよう。"
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

        {/* <WeeklyCalendar lessonData={lessonData} /> */}
        <h2>よくある質問</h2>
        {faqs.map((faq, index) => (
          <FAQAccordion
            key={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
        <ImageButton />
      </main>
    </Layout>
  );
}
