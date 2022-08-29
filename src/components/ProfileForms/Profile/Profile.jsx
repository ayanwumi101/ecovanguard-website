import React, {useContext} from 'react'
import styles from './styles.module.css'
import editIcon from '../../../images/edit.svg'
import avatar from '../../../images/boy.png'
import Footer from '../../Footer/Footer'
import { FormContext } from '../FormContainer'

const Profile = () => {
    const [formData, setFormData] = useContext(FormContext);
    console.log(formData);
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
                                <input type="text" value='Salami Oladapo' disabled />
                            </div>
                            
                            <div className={styles.form_control}>
                                <label htmlFor="Faculty">Email</label>
                                <input type="text" value='salamioladapo@gmail.com' disabled />
                            </div>

                            <div className={styles.form_control}>
                                <label htmlFor="Department">Age</label>
                                <input type="text" value='25 years' disabled />
                            </div>
                            
                            <div className={styles.form_control}>
                                <label htmlFor="Faculty">Active social media account </label>
                                <input type="text" value='https://twitter.com/oladaposalami' disabled />
                            </div>
                        
                    </form>
                </div>

                <div className={styles.second_column}>
                    <h3 className={styles.text}>Educational Details</h3>
                    <form action="">
                        
                            <div className={styles.form_control}>
                                <label htmlFor="Faculty">Institution</label>
                                <input type="text" value='University of Ibadan' disabled />
                            </div>

                            <div className={styles.form_control}>
                                <label htmlFor="Department">Faculty</label>
                                <input type="text" value='Faculty of Technology' disabled />
                            </div>

                            <div className={styles.form_control}>
                                <label htmlFor="Level">Department</label>
                                <input type="text" value='Civil Engineering' disabled />
                            </div>
                            
                            <div className={styles.form_control}>
                                <label htmlFor="Faculty">Level</label>
                                <input type="text" value='500 Level' disabled />
                            </div>

                            <div className={styles.form_control}>
                                <label htmlFor="Department">Year of Admission</label>
                                <input type="text" value='2016' disabled />
                            </div>
                            
                            <div className={styles.form_control}>
                                <label htmlFor="Faculty">Expected year of Graduation </label>
                                <input type="text" value='2022' disabled />
                            </div>
                        
                    </form>
                </div>
            </section>

        </div>
        <Footer />
    </>
  )
}

export default Profile