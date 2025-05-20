import React from "react";
import styles from "../styles/Adversaries.module.css";

const LOGOS = [
  {
    id: "nejm",
    src: require("../assets/ads/NEJM.png"),
    alt: "NEJM logo",
  },
  {
    id: "lancet",
    src: require("../assets/ads/the-lancet.png"),
    alt: "LANCET logo",
  },
  {
    id: "jama",
    src: require("../assets/ads/JAMA.png"),
    alt: "JAMA logo",
  },
  {
    id: "bmj",
    src: require("../assets/ads/BMJ.png"),
    alt: "BMJ logo",
  },
  {
    id: "nm",
    src: require("../assets/ads/nature-medicine.png"),
    alt: "Nature Medicine logo",
  },
];

function Adversaries() {
  return (
    <div className={styles.adContainer}>
      <h3 className={styles.adTitle}>AS FEATURED IN</h3>
      <div className={styles.ads}>
        {LOGOS.map((logo) => (
          <img
            key={logo.id}
            className={`${styles.logo} ${styles[logo.id]}`}
            src={logo.src}
            alt={logo.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default Adversaries;
