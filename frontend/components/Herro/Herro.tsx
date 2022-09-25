import React from "react";
import styles from "./Herro.module.scss";

const Herro = () => {
  return (
    <>
      <div className={styles.HerroContainer}>
        <div className={styles.introText}>
          <h1>Faizan Khan</h1>
          <p>Software Engineer | Digital Artist</p>
        </div>
        <div className={styles.headshot}>
          <img className={styles.headshotImage} src="/headshot.jpg" />
        </div>
      </div>
    </>
  );
};

export default Herro;
