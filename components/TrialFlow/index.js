// /layout/TrialFlow/index.js
import { useState } from "react";
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
    subtitle: "体験レッスン",
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
    subtitle: "お申し込み",
    description: `当日もしくは、後日ご検討のうえお申し込みいただきます。`,
  },
];

const TrialFlow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const toggleStep = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full">
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 overflow-x-auto scrollbar-hide">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex sm:flex-col space-x-4 sm:space-x-0 cursor-pointer relative`}
          onClick={() => toggleStep(index)}
        >
          <div className="flex flex-col items-center sm:mb-4">
            <div
              className={`text-2xl w-16 h-16 md:w-32 md:h-32 ${
                activeStep === index ? "bg-blue-500" : "bg-gray-300"
              } rounded-full flex items-center justify-center text-white`}
            >
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="border-l-2 h-4 mt-2 flex-grow sm:border-l-0 sm:border-r-2 sm:w-4 sm:h-auto sm:mt-0 sm:mr-2 border-gray-300"></div>
            )}
          </div>
          <div className="flex flex-col space-y-2 md:pl-5 md:pt-0 sm:pt-5 overflow-hidden">
            <div className="flex justify-between items-center">
              <h4 className="text-xl font-semibold">{step.subtitle}</h4>
            </div>
            <p className={`text-base max-w-xl transition-transform transform ${
              activeStep === index ? 'ease-in-out duration-300 transform' : 'translate-y-10 opacity-0'
            }`}>{step.description}</p>
          </div>
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
      <Button link="https://forms.gle/wRLWN8WiLdQLZdLQ9">
        体験レッスンに申し込む
      </Button>
    </div>
  );
};

export default TrialFlow;
