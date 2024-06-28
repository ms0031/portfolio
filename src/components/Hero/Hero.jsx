import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
function Hero() {
  return (
      <section className={styles.container}>
          <div className={styles.content}>
              <hi className={styles.title}>Hi, I'm Mayank Shekhar</hi>
              <p className={styles.description}>I'm a full-stack developer</p>
              <a href="mailto:mayankshekhar0031@gmail.com" className={styles.contactBtn}>Contact Me</a>
          </div>
          <img src={getImageUrl("hero/heroImage.png")} alt='hero image' className={styles.heroImg} />
          <div className={styles.topBlur} />
          <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero