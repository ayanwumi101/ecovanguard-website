import React from 'react'
import styles from './styles.module.css'
import logo from '../../../../images/logo.svg'
import boy from '../../../../images/boy.png'
import {FaEdit, FaTrashAlt, FaAlignCenter, FaUpload} from 'react-icons/fa'

const Blog = () => {
  const items = [1, 2, 3];
  return (
    <div className={styles.blog_container}>
      <div className={styles.logo_container}>
        <img src={logo} alt="" />
      </div>

      <div className={styles.heading}>
        <h2>Ecovanguard's Blog</h2>
        <h4>Recent Blog Posts</h4>
      </div>

      <div className={styles.cards_container}>
        {items.map((item) => {
          return (
            <>
                <div className={styles.card}>
                  <div className={styles.image_container}>
                    <img src={boy} alt="" />
                  </div>

                  <div className={styles.card_content}>
                      <div className="card_text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus dignissimos eaque....</p>
                        <p className={styles.date}>22/03/2022</p>
                      </div>

                      <div className={styles.action_btns}>
                        <button className={styles.btn}><FaEdit /></button>
                        <button className={styles.btn}>< FaAlignCenter /></button>
                        <button className={styles.delete}><FaTrashAlt /></button>
                      </div>
                  </div>

                </div>
            </>
            )
          })}
      </div>
      <button>See all blog posts...</button>

      <div >
        <button className={styles.upload_button}>
          <span>Upload Blog Posts</span>
          <FaUpload/>
        </button>
        
      </div>

    </div>
  )
}

export default Blog