import React from 'react'
import styles from './styles.module.css'

const Form3 = () => {
  return (
    <div className={styles.details_container}>
        <div className={styles.heading}>
              <h2>Your Profile</h2>
              <h4>Details with club</h4>
        </div>
        
          <div className={styles.form_container}>
              <form action="">
                  <div className={styles.form_control}>
                      <label htmlFor="">Position</label>
                      <select name="position" id="">
                          <option value="select your position">Select your position in club</option>
                          <option value="leader">Leader</option>
                          <option value="president">President</option>
                          <option value="treasurer">Treasurer</option>
                          <option value="secretary">Secretary</option>
                          <option value="P.R.O">P.R.O</option>
                      </select>
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="">Branch</label>
                      <select name="position" id="">
                          <option value="select your position">Select the location of your branch</option>
                          <option value="leader">UI branch</option>
                          <option value="president">OAU branch</option>
                          <option value="treasurer">FUTA branch</option>
                          <option value="secretary">UNILAG branch</option>
                          <option value="P.R.O">LASU branch</option>
                      </select>
                  </div>


                  <div className={styles.form_control}>
                        <label htmlFor="teams">Teams and Committee</label>
                      <div className={styles.teams_container}>
                          <p>Select all the teams you are a member of within the club</p>
                            <div className={styles.check}>
                                <span>Publicity team</span>
                                <input type="checkbox" />
                            </div>

                            <div className={styles.check}>
                                <span>Editorial committee</span>
                                <input type="checkbox" />
                            </div>

                            <div className={styles.check}>
                                <span>Financial committee</span>
                                <input type="checkbox" />
                            </div>

                            <div className={styles.check}>
                                <span>visitation team</span>
                                <input type="checkbox" />
                            </div>

                            <div className={styles.check}>
                                <span>Media team</span>
                                <input type="checkbox" />
                            </div>
                            <div className={styles.check}>
                                <span>Web team</span>
                                <input type="checkbox" />
                            </div>
                            
                            <div className={styles.check}>
                                <span>Supporters team</span>
                                <input type="checkbox" />
                            </div>
                        </div>
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="participations">Participations</label>
                      <textarea name="participations" id="" cols="30" rows="10" placeholder='Type in your participations with the club'></textarea>
                  </div>

                  <input type="submit" value="Submit" className={styles.submit_btn} />
              </form>
          </div>
    </div>
  )
}

export default Form3