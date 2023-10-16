import { useRouter } from "next/router";

const PricingCard = ({ courseType }) => {
  const router = useRouter();
  console.log("PricingCard is rendering, router pathname:", router.pathname);

  let fees = {
    monthly: "",
    enroll: "",
    textbook: ""
  };

  if (courseType === "group_lesson" || courseType === "free_talk") {
    fees = {
      monthly: "¥13,200",
      enroll: "¥5,000",
      textbook: "¥3,500"
    };
  } else if (courseType === "private_lesson") {
    fees = {
      monthly: "¥22,000",
      enroll: "¥5,000",
      textbook: "¥3,500"
    };
  }

  const cards = [
    {
      key: 'monthly',
      icon: 'fas fa-calendar-alt',
      title: '月額料金',
      bgGradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
      textColor: 'text-blue-700'
    },
    {
      key: 'enroll',
      icon: 'fas fa-user-plus',
      title: '入会費',
      bgGradient: 'bg-gradient-to-br from-green-50 to-green-100',
      textColor: 'text-green-700'
    },
    {
      key: 'textbook',
      icon: 'fas fa-book',
      title: 'テキスト代',
      bgGradient: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
      textColor: 'text-yellow-700'
    }
  ];

  return (
<div className="flex flex-wrap justify-center mt-5">
  {cards.map(card => (
    <div key={card.key} className={`w-80 p-4 mb-4 md:mb-0 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200`}>
      <div className="mb-4">
        <h2 className={`text-3xl font-bold`}>{card.title}</h2>
      </div>
      <span className={`text-5xl font-semibold`}>{fees[card.key]}</span>
    </div>
  ))}
</div>

  );
};

export default PricingCard;
