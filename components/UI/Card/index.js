import styles from "./Card.module.css";
import reviewStyles from "./review.module.css";
import imageStyles from "./imageFeatured.module.css";
import Image from "next/image";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import params from "./lesson.json";
import tutors from "./tutors.json";
import reviews from "./review.json";

const Card = ({ type, data }) => {
  // Conditional branching
  const dataToUse = params.filter((item) => item.type === data);
  switch (type) {
    case "base":
      return (
        <>
          {tutors.map((tutor, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.image_container}>
                <Image
                  src={`/images/${tutor.image}`}
                  alt={tutor.alt}
                  width={500}
                  height={500}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{tutor.name}</h3>
                <p className={styles.description}>{tutor.description}</p>
              </div>
            </div>
          ))}
        </>
      );

    case "ImageFeatured":
      return (
        <Carousel>
          {dataToUse.map((param, index) => (
            <Link href={param.link} key={index}>
              <div className={imageStyles.jumbotron}>
                <div className={imageStyles.container_image}>
                  <Image
                    src={`/images/${param.image}`}
                    alt={param.alt}
                    width={500}
                    height={500}
                  />
                </div>
                <div className={imageStyles.jumbotron_content}>
                  <h3 className={imageStyles.title}>{param.title}</h3>
                  {/* <p className={styles.description}>{param.content}</p> */}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      );

    case "review":
      return (
        <div className={reviewStyles.container}>
          <Carousel>
            {reviews.map((review, index) => (
              <div key={index} className={reviewStyles.items}>
                <div className={reviewStyles.avatar}>
                  <div
                    className={reviewStyles.avatarInner}
                    style={{
                      top: `${review.imagePosition.top}%`,
                      left: `${review.imagePosition.left}%`,
                    }}
                  >
                    <Image
                      src={`/images/${review.avatar}`}
                      alt="avatar"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <h3 className={reviewStyles.name}>{review.name}</h3>
                <p className={reviewStyles.review}>{review.review}</p>
              </div>
            ))}
          </Carousel>
        </div>
      );
  }
};

export default Card;
