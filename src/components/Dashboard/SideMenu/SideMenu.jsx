import React from 'react'
import styles from './styles.module.css'
import { FaImages, FaBlogger, FaUserFriends, FaDatabase, FaHome, FaChartBar } from 'react-icons/fa'
import avatar from '../../../images/boy.png'



const SideMenu = () => {
  return (
    <div className={styles.sideMenu_container}>

      <div className={styles.user}>

        <div className={styles.user_avatar}>
          <img src={avatar} alt="user avatar" />
        </div>

        <span>Salami</span>
      </div>

        <ul>
              <li>
                <FaHome />
                <span>Home</span>
              </li>

              <li>
                <FaDatabase />
                <span>Data</span>
              </li>
              
              <li>
                <FaChartBar />
                <span>Projects</span>
              </li>
              
              <li>
                <FaBlogger />
                <span>Blog</span>
              </li>
              
              <li>
                <FaImages />
                <span>Gallery</span>
              </li>
              
              <li>
                <FaUserFriends />
                <span>Executives</span>
              </li>
              
        </ul>
    </div>
  )
}

export default SideMenu