import React, {useState} from 'react'
import styles from './styles.module.css'
import Alert,{ErrorAlert} from '../FormAlert/Alert'


const Form3 = ({setStep, showAlert, setShowAlert}) => {

    const [person, setPerson] = useState({ position: '' , location: '', publicity: '', editorial: '', finance: '', visit: '', media: '', web: '', support: '', participation: ''});
    const [people, setPeople] = useState([]);



    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person, [name]: value})
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (person.position && person.location && person.editorial && person.finance && person.media && person.publicity && person.web && person.visit && person.support && person.participation) {
        const newPerson = { ...person, id: new Date().getTime().toString() };
            setPeople([...people, newPerson]);
            setPerson({ position: '', location: '', publicity: '', editorial: '', finance: '', visit: '', media: '', web: '', support: '', participation: '' });
            setShowAlert(true);
            setStep(4);
        } else {
            setShowAlert(true);
        }

    }
    

  return (
    <div className={styles.details_container}>
        <div className={styles.heading}>
              <h2>Your Profile</h2>
              <h4>Details with club</h4>
        </div>
        
          <div className={styles.form_container}>
              {!person.position && !person.location && !person.editorial && !person.finance && !person.media && !person.publicity && !person.web && !person.visit && !person.support && !person.participation && showAlert && <ErrorAlert setShowAlert={setShowAlert} />}

              {/* {person.position && person.location && person.editorial && person.finance && person.media && person.publicity && person.web && person.visit && person.support && person.participation && showAlert && <Alert setShowAlert={setShowAlert} />} */}

              <form action="" onSubmit={handleSubmit}>
                  <div className={styles.form_control}>
                      <label htmlFor="position">Position</label>
                      <select id="position" name='position' onChange={handleChange}>
                          <option value="select your position">Select your position in club</option>
                          <option value="leader">Leader</option>
                          <option value="president">President</option>
                          <option value="treasurer">Treasurer</option>
                          <option value="secretary">Secretary</option>
                          <option value="P.R.O">P.R.O</option>
                      </select>
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="location">Branch</label>
                      <select name="location" id="location" onChange={handleChange}>
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
                                <label htmlFor='publicity'>Publicity team</label>
                                <input type="checkbox" value='Publicity team' name='publicity' id='publicity' onChange={handleChange} />
                            </div>

                            <div className={styles.check}>
                                <label htmlFor='editorial'>Editorial committee</label>
                                <input type="checkbox" value='Editorial team' id='editorial' name='editorial' onChange={handleChange} />
                            </div>

                            <div className={styles.check}>
                                <label htmlFor='finance'>Financial committee</label>
                                <input type="checkbox" value='Financial committee' id='finance' name='finance' onChange={handleChange} />
                            </div>

                            <div className={styles.check}>
                                <label htmlFor='visit'>Visitation team</label>
                                <input type="checkbox" value='Visitation team' id='visit' name='visit' onChange={handleChange} />
                            </div>

                            <div className={styles.check}>
                                <label htmlFor='media'>Media team</label>
                                <input type="checkbox" value='Media team' name='media' id='media' onChange={handleChange} />
                            </div>
                            <div className={styles.check}>
                                <label htmlFor='web'>Web team</label>
                                <input type="checkbox" value='Web team' name='web' id='web' onChange={handleChange} />
                            </div>
                            
                            <div className={styles.check}>
                                <label htmlFor='support'>Supporters team</label>
                                <input type="checkbox" value='Supporters team' name='support' id='support' onChange={handleChange} />
                            </div>
                        </div>
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="participation">Participations</label>
                      <textarea name="participation" id="" cols="30" rows="10" onChange={handleChange} placeholder='Type in your participations with the club'></textarea>
                  </div>

                  <button type='submit' className={styles.submit_container}>
                     Submit
                  </button>
              </form>
          </div>
    </div>
  )
}

export default Form3