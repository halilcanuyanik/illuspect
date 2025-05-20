import React from "react";
import styles from "../styles/SplashScreen.module.css";
import icon from "../assets/icon-bg.png";

function SplashScreen() {
  return (
    <div className={styles.splashContainer}>
      <div className={styles.splashTextContainer}>
        <h2 className={styles.splashTextHeader}>
          Discover strange diseases, delve into the unknown secrets of the human
          body.
        </h2>
        <p className={styles.splashText}>
          Illuspect presents the strangest, most interesting and most unheard of
          diseases in the medical world in an entertaining, visual and
          understandable way. Sometimes, examine cases that seem to have come
          out of a TV series and satisfy your curiosity while also learning
          surprising information about health.
        </p>
      </div>
      <div className={styles.splashImgContainer}>
        <img src={icon} alt="illuspect-image" className={styles.splashImg} />
      </div>
    </div>
  );
}

export default SplashScreen;
