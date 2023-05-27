// Import the JSON data
import params from "./lesson.json";
import tutors from "./tutors.json";
import reviews from "./review.json";

// Import the individual card components
import BaseCard from "./BaseCard";
import ImageFeaturedCard from "./ImageFeaturedCard";
import ReviewCard from "./ReviewCard";

// Import Carousel
import Carousel from "@/components/UI/Carousel";

const Card = ({ type, data }) => {
  // Filter the data
  const dataToUse = params.filter((item) => item.type === data);

  // Map the card types to their corresponding components
  const cardTypes = {
    base: tutors.map((tutor, index) => <BaseCard key={index} data={tutor} />),
    ImageFeatured: (
      <Carousel>
        {dataToUse.map((data, index) => (
          <ImageFeaturedCard key={index} data={data} />
        ))}
      </Carousel>
    ),
    review: (
      <Carousel>
        {reviews.map((review, index) => (
          <ReviewCard key={index} data={review} />
        ))}
      </Carousel>
    ),
  };

  // Return the matching component, or null if no match
  return cardTypes[type] || null;
};

export default Card;
