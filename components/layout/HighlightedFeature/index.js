// HighlightedFeatureList.js
import HighlightedFeature from "@/components/UI/Feature/index";

const HighlightedFeatureList = ({ config }) => {
  return (
    <div>
      {config.map((item, index) => (
        <HighlightedFeature key={index} color={item.color}>
          {item.text.split("\n").map((text, index) => (
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
