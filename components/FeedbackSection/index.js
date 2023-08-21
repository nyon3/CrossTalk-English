import Section from "@/components/Section";
import Button from "@/components/Button";

function FeedbackSection() {
  return (
    <Section>
      <h2>Feedback</h2>
      <p>
      私たちのポッドキャストにあなたの声を！英語の悩み、旅行の体験、好きな英語作品など、何でもお気軽にお便りください！
      </p>
      <Button link={"/about"}>Send Us Your Question</Button>
    </Section>
  );
}

export default FeedbackSection;
