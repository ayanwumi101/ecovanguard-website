import React,{useState} from 'react'
import styles from './styles.module.css'
import { FaArrowRight } from 'react-icons/fa'
// import Profile2 from '../Profile2/Profile2'




const Form2 = () => {
    const [nextPage, setNextPage] = useState(false);

    const handleClick = () => {
        setNextPage(true)
    }
  return (
    <div className={styles.profile_container}>
        <div className={styles.heading}>
              <h2>Your Profile</h2>
              <h3>Educational Details</h3>
        </div>
        
          <div className={styles.form_container}>
              <form action="">
                  <div className={styles.form_control}>
                      <label htmlFor="Institution">Institution</label>
                      <select name="Institution" id="">
                          <option value="default value">Select your institution</option>
                          <option value="University of Ibadan">University of Ibadan</option>
                          <option value="University of Ibadan">University of Ilorin</option>
                          <option value="University of Ibadan">Obafemi Awolowo University</option>
                      </select>
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="Faculty">Faculty</label>
                      <input type="text" placeholder='Input your Faculty' />
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="Department">Department</label>
                      <input type="text" placeholder='Input your Department' />
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="Level">Level</label>
                      <input type="text" placeholder='Input your Level' />
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="Admission year">Year of Admission</label>
                      <select name="Admission year" id="">
                          <option value="default value">Select year of admission</option>
                          <option value="2015">2015</option>
                          <option value="2016">2016</option>
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option valu="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                      </select>
                  </div>

                  <div className={styles.form_control}>
                     <label htmlFor="Level">Expected year of graduation</label>
                     <select name="graduation year" id="">
                          <option value="default value">Select assumed graduation year</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option valu="2028">2028</option>
                          <option value="2029">2029</option>
                          <option value="2030">2030</option>
                      </select>
                  </div>


                  <div className="stepper"></div>

                  <div className={styles.submit} onClick={handleClick}>
                      <input type="submit" value='Proceed' />
                      <FaArrowRight />
                  </div>
              </form>
              {/* {nextPage && (<Profile2 />)} */}
        </div>
    </div>
  )
}

export default Form2