import React from 'react'
import styles from './styles.module.css'
import editIcon from '../../../images/edit.svg'
import avatar from '../../../images/boy.png'
import Footer from '../../Footer/Footer'
import { FormContext } from '../../../App'
import { useContext } from 'react'


const Profile2 = () => {
    const [formData, updateForm] = useContext(FormContext);
    console.log("Profile", formData);
  return (
    <>
        <div className={styles.profile_container}>
                <div className={styles.heading}>
                    <h2>Your Profile</h2>
                    <img src={editIcon} className={styles.editIcon} alt="edit-icon" />
                </div>
                
            
            <section className={styles.columns_container}>
                <div className={styles.first_column}>
                    <h3 className={styles.text}>Personal Details</h3>
                    <div className={styles.profile_image}>
                        <img src={avatar} alt="user-avatar" className={styles.avatar} />
                    </div>
                    <form action="">
                        
                        <div className={styles.form_control}>
                                <label htmlFor="Level">Full Name</label>
                                <input type="text" value={formData.firstName} disabled />
                            </div>
                            
                            <div className={styles.form_control}>
                                <label htmlFor="Faculty">Email</label>
                                <input type="text" value={formData.email} disabled />
                            </div>

                            <div className={styles.form_control}>
                                <label htmlFor="Department">Age</label>
                                <input type="text" value={formData.age} disabled />
                            </div>
                            
                            <div className={styles.form_control}>
                                <label htmlFor="Faculty">City </label>
                                <input type="text" value={formData.city} disabled />
                            </div>
                        
                    </form>
                </div>

                <div className={styles.second_column}>
                    <h3 className={styles.text}>Educational Details</h3>
                    <form action="">
                        
                            <div className={styles.form_control}>
                                <label htmlFor="school_name">School Name</label>
                                <input type="text" value={formData.institution} disabled />
                            </div>

                            <div className={styles.form_control}>
                                <label htmlFor="school location">School Location</label>
                                <input type="text" value={formData.faculty} disabled />
                            </div>
                            
                            <div className={styles.form_control}>
                                <label htmlFor="Faculty">Class</label>
                                <input type="text" value={formData.level} disabled />
                            </div>

                            <div className={styles.form_control}>
                                <label htmlFor="admission year">Year of Admission</label>
                                <input type="text" value={formData.admission} disabled />
                            </div>
                            
                            <div className={styles.form_control}>
                                <label htmlFor="graduation year">Expected year of Graduation </label>
                                <input type="text" value={formData.graduation} disabled />
                            </div>
                        
                    </form>
                </div>
            </section>

        </div>
        <Footer />
    </>
  )
}

export default Profile2