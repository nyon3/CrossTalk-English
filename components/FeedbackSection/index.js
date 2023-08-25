
import Button from "@/components/Button";

function FeedbackSection() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Feedback
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500">
          私たちのポッドキャストにあなたの声を！英語の悩み、旅行の体験、好きな英語作品など、何でもお気軽にお便りください！
        </p>
        <div className="mt-6">
          <Button link={"/about"}>Send Us Your Question</Button>
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;
