// /layout/TrialFlow/index.js

import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";

const steps = [
  {
    title: "Step 1",
    subtitle: "予約の確定",
    description: `お申し込みフォームにて、ご希望の日程をご連絡ください。
    日程調整をさせていただいてからの返答をもって受付完了となります。`,
  },
  {
    title: "Step 2",
    subtitle: "体験レッスン開始",
    description: `まずは講師が、あなたの英語レベルを確認しながら
      実際のスタイルでレッスンを受けていただきます。`,
  },
  {
    title: "Step 3",
    subtitle: "ご相談",
    description: `体験レッスンを受けられた後で、
    今後のレッスンプランやスケジュールなどをご提案。
    ご不明な点などがあればその場で回答いたします。`,
  },
  {
    title: "Step 4",
    subtitle: "ご入会のお申し込み",
    description: `当日もしくは、後日ご検討のうえお申し込みいただきます。`,
  },
];

const TrialFlow = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <SectionHeader
        mainHeader={"体験レッスンで自分に合うかチェック！"}
        subHeader={"Join us"}
      />
      {/* TODO Create timeline UI for steps */}
      <div className="flex flex-col space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <span className="text-lg font-bold">{step.title}</span>
            <h4 className="text-md font-medium">{step.subtitle}</h4>
            <p className="text-sm">{step.description}</p>
          </div>
        ))}
      </div>
      <ul className="list-disc list-inside my-10">
        <li>
          当スクールの体験レッスンは１回
          1,000円（税込）の有料体験レッスンとなります。
        </li>
        <li>体験レッスンはお一人様１回限りとさせていただいております。</li>
      </ul>
      <Button
        link="https://forms.gle/wRLWN8WiLdQLZdLQ9"
      >
        体験レッスンに申し込む
      </Button>
    </div>
  );
};

export default TrialFlow;
