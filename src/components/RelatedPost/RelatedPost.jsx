import React from 'react'
import styles from './styles.module.css'

const RelatedPost = ({item}) => {
  return (
    <div className={styles.column2}>
        <div className={styles.post_title}>
            <h3>{item.title}</h3>
            <p>Date</p>
        </div>

        <div className={styles.post_image}>
            <img src={item.mainImage.asset.url} alt="" />
        </div>
    </div>
  )
}

export default RelatedPost