import React from 'react'
import clubs from "../../data/clubs.json"
import { getImageUrl } from "../../utils"
import styles from "./Associations.module.css"
export const Associations = () => {
  return (
    <section className={styles.container} id="Associations">
      <h2 className={styles.title}>Associations</h2>
      <div className={styles.content}>
        <div className={styles.clubs}> 
          {clubs.map((club, id) => {
            return (
              <div key={id} className={styles.club}>
                <div className={styles.clubImage}>
                  <img src={getImageUrl(club.imageSrc)} alt={club.title} />
                    </div>
                    <div className={styles.clubContent}>
                    <h3>{club.position}</h3>
                    <h3>{club.title}</h3>
                        <h3>{club.location}</h3>
                    </div>
              </div>
            );
          }
          )}
        </div>
      </div>
    </section>
  )
}

export default Associations;
