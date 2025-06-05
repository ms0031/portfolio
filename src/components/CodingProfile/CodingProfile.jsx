import React from "react";
import styles from "./CodingProfile.module.css";
export const CodingProfile = () => {
  return (
    <section className={styles.container} id="Coding">
      <h2 className={styles.title}>Coding Profiles</h2>
      <div className={styles.content}>
        <div className={styles.profiles}>
          <div className={styles.profile}>
          <img
            src="https://leetcard.jacoblin.cool/ms0031?theme=forest&ext=contest"
            alt="Leetcode Stats"
            className={styles.leetCodeImage}
            />
          <h3 className={styles.profileTitle}>Leetcode Stats</h3>
            </div>
        </div>
      </div>
    </section>
  );
};
