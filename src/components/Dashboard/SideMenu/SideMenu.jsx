import React, {useState} from 'react'
import styles from './styles.module.css'
import { FaImages, FaBlogger, FaUserFriends, FaDatabase, FaHome, FaChartBar, FaBars, FaCalendarAlt, FaUsers, FaSearchLocation, FaTimes } from 'react-icons/fa'
import avatar from '../../../images/boy.png'
import {Link} from 'react-router-dom'



const SideMenu = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
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
                  
                  <Link to='/'><li>
                    <FaBlogger />
                    <span>Blog</span>
                  </li>
                  </Link>
                  
                  <Link to='/gallery'><li>
                    <FaImages />
                    <span>Gallery</span>
                  </li></Link>
                  
                  <li>
                    <FaUserFriends />
                    <span>Executives</span>
                  </li>

                  <li>
                    <FaCalendarAlt />
                    <span>Events</span>
                  </li>
                  
                  <li>
                    <FaUsers />
                    <span>Partners</span>
                  </li>

                  <li>
                    <FaSearchLocation />
                    <span>Location</span>
                  </li>
                  
          </ul> 
        </div> 

      <div className={styles.bars}>
          <button onClick={() => setShowSideBar(true)}><FaBars className={styles.bar_icon} /></button>
      </div>
      {showSideBar ? <SideBar setShowSideBar={setShowSideBar} /> : null }
    </>
  )
}

export default SideMenu





export const SideBar = ({setShowSideBar}) => {
  
  return(
    <>
      <div className={styles.modal}>
        <div className={styles.sidebar_container}>
          <button onClick={() => setShowSideBar(false)}><FaTimes /></button>
        {/* <div className={styles.testing}> */}

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
                  
                  <Link to='/'><li>
                    <FaBlogger />
                    <span>Blog</span>
                  </li>
                  </Link>
                  
                  <Link to='/gallery'><li>
                    <FaImages />
                    <span>Gallery</span>
                  </li></Link>
                  
                  <li>
                    <FaUserFriends />
                    <span>Executives</span>
                  </li>

                  <li>
                    <FaCalendarAlt />
                    <span>Events</span>
                  </li>
                  
                  <li>
                    <FaUsers />
                    <span>Partners</span>
                  </li>

                  <li>
                    <FaSearchLocation />
                    <span>Location</span>
                  </li>
                  
          </ul> 
        {/* </div>  */}

        </div>
      </div>
    </>
  )
}