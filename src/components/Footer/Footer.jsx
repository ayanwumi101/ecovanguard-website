import React from 'react'
import styles from './styles.module.css'
import {FaInstagram, FaLinkedin, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className={styles.contents}>
        <div className="box">
          <h5>About Us</h5>
          <p>Our Location</p>
          <p>Executives</p>
          <p>Partners</p>
        </div>
        <div className="box">
          <h5>Club's Policy</h5>
          <p>Privacy Policy</p>
          <p>Our location</p>
          <p>FAQ</p>
        </div>
        <div className="box">
          <h5>Projects</h5>
          <p>Gallery</p>
          <p>Blog</p>
          <p>Calendar</p>
        </div>
      </div>

      <div className={styles.social}>
        <p>Follow us on social media: @Ecovanguardclub</p>
        <div className={styles.icons}>
          <i><FaTwitterSquare /></i>
          <i><FaInstagram /></i>
          <i><FaFacebookSquare /></i>
          <i><FaLinkedin /></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer