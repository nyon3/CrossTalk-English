import PlanCard from "@/components/UI/PriceComponent/pricing";

const Pricing = () => {
  // 支払方法をついか、例えばコンビネーションプランなら、引き落とし制ではなくて、単発課金にするとか。
  const plans = [
    {
      title: "フレキシブルプライベートプラン",
      subtitle: "個別指導で効率的な学習",
      content: [
        { label: "レッスン回数", value: "2回または4回" },
        { label: "2回プラン", value: "¥[料金を記載してください]" },
        { label: "4回プラン", value: "¥[料金を記載してください]" },
      ],
      ctaText: "詳細・お申し込み",
    },
    {
      title: "グループマスタリープラン",
      subtitle: "一緒に楽しく学ぶグループレッスン",
      content: [
        { label: "レッスン回数", value: "4回" },
        { label: "料金", value: "¥[料金を記載してください]" },
      ],
      ctaText: "詳細・お申し込み",
    },
    {
      title: "コンビネーションプラン",
      subtitle: "プライベート＆グループでバランスよく学ぶ",
      content: [
        {
          label: "プライベート2回＋グループ4回",
          value: "¥[料金を記載してください]",
        },
        {
          label: "プライベート4回＋グループ4回",
          value: "¥[料金を記載してください]",
        },
      ],
      ctaText: "詳細・お申し込み",
    },
  ];
  return (
    <>
      <h1 style={{ textAlign: "center" }}>This is UI test page</h1>
      <p style={{ textAlign: "center" }}>
        ホームページのデザイン確認のページです、書かれている内容は実際の内容と異なります
      </p>
      {/* <div style={{display:"flex", flexDirection: "column", alignItems:"center"}}>
        <h1>料金プラン</h1>
        <div style={{displa:"flex", flexWrap: "wrap", justifyContent:"center", gap:"1rem"}}>
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Pricing;
