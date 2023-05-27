// HighlightedFeatureList.js
import HighlightedFeature from "@/components/UI/Feature/index";

const HighlightedFeatureList = () => {
  const features = [
    {
      color: "red",
      text: "少人数制で会話量が多い",
    },
    {
      color: "orange",
      text: "経験豊富な外国人講師",
    },
    {
      text: "アットホームな空間",
    },
  ];

  return (
    <div>
      {features.map((feature, index) => (
        <HighlightedFeature key={index} color={feature.color}>
          {feature.text.split("\n").map((text, index) => (
            <span key={index}>
              {text}
              <br />
            </span>
          ))}
        </HighlightedFeature>
      ))}
    </div>
  );
};

export default HighlightedFeatureList;
