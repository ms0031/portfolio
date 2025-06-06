import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";
function Hero() {
  return (
      <section className={styles.container}>
          <div className={styles.content}>
              <h1 className={styles.title}>
                  Hi, I'm <span className={styles.name}>Mayank Shekhar</span>
              </h1>
              <p className={styles.description}>I am a pre-final year student at BIT Mesra, India, currently pursuing a Bachelor's degree in Technology with a major in Computer Science.</p>
              <a href="mailto:mayankshekhar0031@gmail.com" className={styles.contactBtn}>Contact Me</a>
          </div>
          <img src={getImageUrl("hero/heroImage4.png")} alt='hero image' className={styles.heroImg} />
          <div className={styles.topBlur} />
          <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero