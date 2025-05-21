import React, { useState, useEffect } from "react";
import Card from "./Card";
import styles from "../styles/Daily.module.css";
import diseases from "../data/diseases";

function Daily() {
  const size = diseases.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === size - 1 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.dailyContainer}>
      <h3 className={styles.dailyHeader}>DAILY</h3>
      <Card index={currentIndex} />
    </div>
  );
}

export default Daily;
