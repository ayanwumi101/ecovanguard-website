import React from 'react'
import earth from '../../images/earth.svg'
import Footer from '../Footer/Footer'
import styles from './styles.module.css'


const Donate = () => {
  return (
    <div className={styles.donate_container}>
        <main>
            <div className={styles.heading}>
                <h2>Donate to Nature</h2>
            </div>

            <div className={styles.hero_section}>
                 <div className={styles.hero_content}>
                        <div className={styles.hero_text}>
                            <h2>Our Aim</h2>
                            <p>Getting the earth to <strong> greenest </strong> it has ever been through proper waste management and Eco-education before 2030.</p>
                        </div>
                        <div className={styles.hero_image}>
                            <img src={earth} alt="Earth Image" />
                        </div>
                 </div>
            </div>

            <div className={styles.donation_sub_container}>
                <div className={styles.donation}>
                    <div className={styles.questions}>
                        <div className={styles.first}>
                            <h4>How can you help nature</h4>
                            <p>The least you can personally do for nature is ensuring that every environment you find yourself is kept clean.</p>
                            <p>You can do more by volunteering for the community development and cleaning</p>
                            <p>Another way you can help nature is by funding organisations whose sole purpose is to ensure the greeness and Eco-friendliness of earth. Organizations like Ecovanguard.</p>
                        </div>
                        <div className={styles.second}>
                            <h4>How would my donations be spent</h4>
                            <p>At Ecovanguard, our priorities are taching the future generation how to ensure proper waste managementis carried out and and creating an Eco-friendly environment through clean cities.</p>
                            <p>We ensure you that your donations will be spent on projects that fulfil these purposes.</p>
                        </div>
                    </div>
                    
                    <div className={styles.card_details}>
                        <form action="" classname={styles.form_container}>
                            <div className={styles.form_control}>
                                <label htmlFor="amount">Amount</label>
                                <input type="text" placeholder='input the amount you want to donate' />
                            </div>
                            
                            <div className={styles.form_control}>
                                <label htmlFor="amount">Card Name</label>
                                <input type="text" placeholder='input card name' />
                            </div>

                            <div className={styles.form_control}>
                                <label htmlFor="amount">Card Number</label>
                                <input type="text" placeholder='1 2 3 4   5 6 7 8   9 0 1 2   3 4 5 6' id={styles.mastercard} />
                            </div>

                            <div className={styles.card_pin}>
                                <div className={styles.form_control}>
                                    <label htmlFor="amount">Expiry date</label>
                                    <input type="text" placeholder='MM / YY' />
                                </div>
                                
                                <div className={styles.form_control}>
                                    <label htmlFor="amount">CVV</label>
                                    <input type="text" placeholder='123' />
                                </div>
                            </div>
                            
                            <div className={styles.card_save}>
                                <label htmlFor="amount">Save my card</label>
                                <input type="checkbox" id='amount' />
                            </div>
                            
                            <div className={styles.form_control}>
                                <input type="submit" className={styles.submit} value='Donate'/>
                                <p>Powered by <a href="https://paystack.com" target='_blank'>paystack</a></p>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
        
    </div>
  )
}

export default Donate