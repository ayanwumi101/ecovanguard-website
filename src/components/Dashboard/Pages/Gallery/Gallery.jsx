import React from 'react'
import styles from './styles.module.css'
import logo from '../../../../images/logo.svg'
import boy from '../../../../images/boy.png'
import {FaImage} from 'react-icons/fa'

const Gallery = () => {
  const date = new Date().toDateString();
  const items = [1,2,3,4,5,6,7,8,9]
  return (
    <div className={styles.gallery_container}>
        <div className={styles.logo_container}>
            <img src={logo} alt="" />
        </div>

        <div className={styles.heading}>
            <h2>Ecovanguard's Gallery</h2>
            <h4>Recent Events</h4>
            <p>{date}</p>
            <h4>Eid Fest 2022</h4>
        </div>


        <div className={styles.image_gallery}>
                {items.map((item) => {
                    return (
                        <div className={styles.single_image}>
                            <img src={boy} alt="" />
                        </div>
                    )
                })}

            <button className={styles.upload_button}>
                <span>Upload an event</span>
                <FaImage/>
            </button>
        </div>

    </div>
  )
}

export default Gallery