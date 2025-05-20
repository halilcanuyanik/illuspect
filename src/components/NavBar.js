import React, { useState, useEffect } from "react";
import styles from "../styles/NavBar.module.css";

function NavBar({ onOptionClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navOptions = ["Welcome", "Daily", "Testimonials", "Support"];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (opt) => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
    onOptionClick(opt);
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.imgPlaceHolder}>
        <h1 className={styles.title}>ILLUSPECT</h1>
      </div>
      {isMobile && (
        <button className={styles.menuButton} onClick={toggleMenu}>
          <div
            className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
          ></div>
          <div
            className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
          ></div>
          <div
            className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
          ></div>
        </button>
      )}

      <div
        className={`${styles.navSection} ${isMenuOpen ? styles.menuOpen : ""}`}
      >
        {navOptions.map((opt, idx) => {
          const isLastItem = idx === navOptions.length - 1;
          return (
            <div
              key={idx}
              className={isLastItem ? styles.lastNavOption : styles.navOption}
              onClick={() => handleOptionClick(opt)}
            >
              {opt}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavBar;
