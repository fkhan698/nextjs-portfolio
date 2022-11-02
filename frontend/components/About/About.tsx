import React from "react";
import styles from "./About.module.scss";
const About = () => {
  return (
    <div className={styles.AboutContainer}>
      <div className={styles.headshot}>
        <img className={styles.headshotImage} src="/headshot.jpg" />
      </div>
      <div className={styles.aboutText}>
        <p>
          I am a software engineer based out of Missouri. I Specialize in
          creating web apps using React, Nodejs, and other tech. I also have
          interest in creating digital art either by code or by hand. I plan on
          using this website to display some of my work
        </p>
      </div>
    </div>
  );
};

export default About;
