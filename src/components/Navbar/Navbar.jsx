import React, {useState} from 'react'
import { FaSignInAlt, FaBars, FaTimes} from 'react-icons/fa'
import logo from '../../images/logo.svg';
import styles from './styles.module.css';
import arrow from '../../images/arrow.svg'
 
const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
     const showNav = () => {
        setShowSidebar(true)
    }
   return (
     <div className={styles.navbar_container}>
           <header>
               <nav>
                   <div className={styles.brand}>
                       <img src={logo} alt="Ecovanguard Logo" className={styles.logo} />
                   </div>

                   <div className={styles.links}>
                       <ul className={styles.lists}>
                            <li>About Us</li>
                            <li>Projects</li>
                            <li>Donate</li>
                            <li className={styles.login}>
                                <FaSignInAlt />
                                <span>Account</span>
                            </li>
                        </ul>
                   </div>

                   <div className={styles.icon} onClick={showNav}>
                       <FaBars />
                   </div>
               </nav>

               <button className={styles.button}>
                   <img src={arrow} alt="Go back icon" className={styles.back_btn} />
               </button>
           </header>
               {showSidebar ? <SideNav setShowSidebar={setShowSidebar} /> : null}
     </div>
   )
 }
 
 export default Navbar



 export const SideNav = ({setShowSidebar}) => {

    
    return(
        <>
        
            <div className={styles.sidenav_modal}>
                <div className={styles.sidenav_container}>
                    <button className={styles.sidenav_btn} onClick={() => setShowSidebar(false)}><FaTimes className={styles.close_icon} /></button>
                    
                    <ul className={styles.sidenav_links} onClick={() => setShowSidebar(false)}>
                        <li>About Us</li>
                        <li>Projects</li>
                        <li>Donate</li>
                        <div className={styles.login}>
                            <FaSignInAlt />
                            <span>Account</span>
                        </div>
                    </ul>
                    
                </div>
            </div> 
        </>
    )
}




