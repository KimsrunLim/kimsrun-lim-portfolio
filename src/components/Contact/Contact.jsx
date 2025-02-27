import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:ksrunlim@gmail.com" className={styles.contactBtn}>
            <div className={styles.contactBtnInfo}>
              <img
                src={getImageUrl("contact/emailIcon.png")}
                alt="Email icon"
                className={styles.contactIcons}
              />
              ksrunlim@gmail.com
            </div>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/kimsrun-lim/" target="_blank" className={styles.contactBtn}>
            <div className={styles.contactBtnInfo}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
                className={styles.contactIcons}
              />
              linkedin.com/in/kimsrun-lim
            </div>
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/KimsrunLim" className={styles.contactBtn}>
            <div className={styles.contactBtnInfo}>
              <img
                src={getImageUrl("contact/githubIcon.png")}
                alt="Github icon"
                className={styles.contactIcons}
              />
              github.com/KimsrunLim
            </div>
          </a>
        </li>
      </ul>
    </footer>
  );
};
