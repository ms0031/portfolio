import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css";
export const About = () => {
  return (
      <section className={styles.container} id="About"> 
          <h2 className={styles.title}>About</h2>
          <div className={styles.content}>
              <img
                  src={getImageUrl("about/aboutImage5.png")} alt="about image" className={styles.aboutImage} />
              <ul className={styles.aboutItems}>
                  <li className={styles.aboutItem}>
                      <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"/>
                        <div className={styles.aboutItemText}>
                          <h3>Frontend Developer</h3>
                          <p>
                              I'm a frontend developer with experience in building responsive and optimized sites, focusing on creating user-friendly interfaces and ensuring cross-browser compatibility.
                          </p>
                        </div>
                  </li>
                  <li className={styles.aboutItem}>
                      <img src={getImageUrl("about/serverIcon.png")} alt="cursor icon"/>
                      <div className={styles.aboutItemText}>
                          <h3>Backend Developer</h3>
                          <p>
                          I have experience developing fast and optimized websites that provide seamless user experiences and high performance.
                          </p>
                        </div>
                  </li>
              </ul>
          </div>
          <div className={styles.topBlur} /> 
      </section>
  )
}
