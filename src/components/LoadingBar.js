import React from "react";
import styles from "../styles/LoadingBar.module.css";

function LoadingBar({ isLoading }) {
  return (
    <div className={styles.loadingContainer}>
      <div className={isLoading ? styles.loadingBar : ""}></div>
    </div>
  );
}

export default LoadingBar;
