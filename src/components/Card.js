import React from "react";
import styles from "../styles/Card.module.css";
import diseases from "../data/diseases";

function Card({ index }) {
  const { name, causes, symptoms, explanation, tag, imgPath } = diseases[index];
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTag}>{tag.toUpperCase()}</div>
      <div className={styles.cardImgContainer}>
        <img src={imgPath} alt="disease image" className={styles.cardImg} />
      </div>
      <div className={styles.cardInfo}>
        <h1 className={styles.cardName}>{name}</h1>
        <div className={styles.cardCauses}>
          {causes.map((el) => {
            return (
              <div className={styles.cause} key={el}>
                {el}
              </div>
            );
          })}
        </div>
        <p className={styles.cardText}>{explanation}</p>
        <div className={styles.cardSymptoms}>
          <ul className={styles.symptomList}>
            {symptoms.map((el) => {
              return (
                <li className={styles.symptom} key={el}>
                  - {el}
                </li>
              );
            })}
          </ul>
        </div>
        <a href="#" className={styles.link}>
          See more &rarr;
        </a>
      </div>
    </div>
  );
}

export default Card;
