import React from "react";
import styles from "../styles/Footer.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>About Us</h3>
            <p className={styles.footerAbout}>
              Our company has been providing quality services since 2010. With
              our innovative solutions, we are a leader in our industry.
            </p>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Company</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#">About Illuspect</a>
              </li>
              <li>
                <a href="#">For Business</a>
              </li>
              <li>
                <a href="#">Health Partners</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Social Media Management</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Resources</h3>
            <ul className={styles.footerLinks}>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <ul className={styles.contactInfo}>
              <li>
                <MdLocationOn className={styles.contactIcon} />
                <span>Izmir, Turkey</span>
              </li>
              <li>
                <MdPhone className={styles.contactIcon} />
                <span>+90 512 345 67 89</span>
              </li>
              <li>
                <MdEmail className={styles.contactIcon} />
                <span>illuspect@gmail.com</span>
              </li>
            </ul>
            <div className={styles.newsletter}>
              <h4>Subscribe to Our Newsletter</h4>
              <form className={styles.newsletterForm}>
                <input type="email" placeholder="Your email address" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerContainer}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} by Halil Can Uyanık. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
