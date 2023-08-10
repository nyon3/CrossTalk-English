import Section from "@/components/Section";
import Button from "@/components/Button";

function FeedbackSection() {
  return (
    <Section gap={20}>
      <h2>Feedback</h2>
      <p>
        We love to hear from you! Send us your questions, comments, or
        suggestions for future episodes.
      </p>
      <Button link={"/about"}>Send Us Your Question</Button>
    </Section>
  );
}

export default FeedbackSection;
