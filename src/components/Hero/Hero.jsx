import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <br />Kimsrun Lim</h1>
        <p className={styles.description}>
          <br/><br/>I'm a Software Engineer.<br/>
          Bachelor of Science in Computer Science.<br/><br/>
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:ksrunlim@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of Kimsrun Lim"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
