import React, { useState } from "react";
import styles from "../styles/Testimonials.module.css";
import testimonials from "../data/testimonials";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBack = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const size = testimonials.length;

  return (
    <div className={styles.testimonialsContainer}>
      <h3 className={styles.testimonialsHeader}>TESTIMONIALS</h3>
      <div className={styles.testimonials}>
        {testimonials.slice(currentIndex, currentIndex + 3).map((el) => {
          return (
            <div className={styles.testimonialBox}>
              <img
                src={el.imgPath}
                alt="user-image"
                className={styles.testimonialImg}
              />
              <h4 className={styles.testimonialName}>{el.name}</h4>
              <h5 className={styles.testimonialTitle}>{el.title}</h5>
              <p className={styles.testimonialText}>{el.testimonial}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.buttons}>
        <button onClick={handleBack} disabled={currentIndex === 0}>
          &larr;
        </button>
        <button onClick={handleNext} disabled={currentIndex === size - 3}>
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
