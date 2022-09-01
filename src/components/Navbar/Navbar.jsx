import React, {useState} from 'react'
import { FaSignInAlt, FaBars, FaTimes} from 'react-icons/fa'
import logo from '../../images/logo.svg';
import styles from './styles.module.css';
import arrow from '../../images/arrow.svg'
import { Link } from 'react-router-dom';

 
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
                           <Link to='/projects'><li>Projects</li></Link>
                           <Link to='/donate'><li>Donate</li></Link>
                           <Link to='/blog'><li>Blog</li></Link>
                           <Link to='/create_account'><li className={styles.login}>
                                <FaSignInAlt />
                                <span>Account</span>
                            </li></Link>
                        </ul>
                   </div>

                   <div className={styles.icon} onClick={showNav}>
                       <FaBars />
                   </div>
               </nav>

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
                        <Link to='/projects'><li>Projects</li></Link>
                        <Link to='/donate'><li>Donate</li></Link>
                        <Link to='/blog'><li>Donate</li></Link>
                        <Link to='/create_account'><div className={styles.login}>
                            <FaSignInAlt />
                            <span>Account</span>
                        </div></Link>
                    </ul>
                    
                </div>
            </div> 
        </>
    )
}




