import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/eyeIcon.png")}
              alt="Cursor icon" 
              className={styles.aboutIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I have experience building responsive websites using frameworks such as Bootstrap,
                React, Tailwind, and more!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img 
              src={getImageUrl("about/computerIcon.png")} 
              alt="Server icon" 
              className={styles.aboutIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience in developing backend systems with REST APIs, relational and NoSQL databases,
                and robust testing and debugging.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img 
              src={getImageUrl("about/thunderIcon.png")} 
              alt="UI icon" 
              className={styles.aboutIcon}
            />
            <div className={styles.aboutItemText}>
              <h3>Future</h3>
              <p>
                I have a strong passion for growth and learning in the industry, always seeking new opportunities
                to improve.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
