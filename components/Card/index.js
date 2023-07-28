// Card/index.js
import params from "@/content/mainPageContents/lesson.json";
import tutors from "@/content/mainPageContents/tutors.json";
import reviews from "@/content/mainPageContents/review.json";

// Import the individual card components
import BaseCard from "./BaseCard/BaseCard";
import ImageFeaturedCard from "./ImageFeaturedCard/ImageFeaturedCard";
import ReviewCard from "./ReviewCard/ReviewCard";

// Import Carousel
import Carousel from "@/components/Card/Carousel";

// Card component takes in 4 props:
// 1. 'type': This decides the layout of the card. You can pass 'base', 'ImageFeatured', or 'review'.
// 2. 'data': This tells the card which data to use. You can pass 'params', 'tutors', or 'reviews'.
// 3. 'showButton': This controls if the card will display a button. Pass 'true' to show the button, 'false' to hide it.
// 4. 'dataType': This filters the data to use. You can pass 'type1' or 'type2' to filter lessons in 'params'.
//
// Here's an example usage:
// <Card type="base" data="params" showButton={true} dataType="type1" />

const Card = ({ type, data, showButton, dataType }) => {
  // Map the data prop to the actual data
  const dataSources = {
    params,
    tutors,
    reviews,
  };

  // Get the data to use
  const dataToUse = dataSources[data];

  // Handle case when data is not defined
  if (!dataToUse) {
    console.error(`Invalid data prop passed to Card: ${data}`);
    return null;
  }

  // Map the card types to their corresponding components
  const cardTypes = {
    base: dataToUse.map((item, index) => (
      <BaseCard
        key={index}
        data={item}
        showButton={showButton}
        dataType={dataType}
      />
    )),
    ImageFeatured: (
      <Carousel>
        {dataToUse.map((item, index) => (
          <ImageFeaturedCard
            key={index}
            data={item}
            showButton={showButton}
            dataType={dataType}
          />
        ))}
      </Carousel>
    ),
    review: (
      <Carousel>
        {dataToUse.map((item, index) => (
          <ReviewCard
            key={index}
            data={item}
            showButton={showButton}
            dataType={dataType}
          />
        ))}
      </Carousel>
    ),
  };

  // Return the matching component, or null if no match
  return cardTypes[type] || null;
};

export default Card;
