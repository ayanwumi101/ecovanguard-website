import React,{useState} from 'react'
import styles from './styles.module.css'
import { FaArrowRight } from 'react-icons/fa'
import {ErrorAlert} from '../FormAlert/Alert'


const Form2 = ({ setStep, showAlert, setShowAlert }) => {

    const [person, setPerson] = useState({ institution: '', faculty: '', department: '', level: '', admissionYear: '', graduationYear: '' });
    const [people, setPeople] = useState([]);


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (person.admissionYear && person.department && person.institution && person.faculty && person.graduationYear && person.level) {

            const newPerson = { ...person, id: new Date().getTime().toString() };
            setPeople([...people, newPerson]);
            setPerson({ institution: '', faculty: '', department: '', level: '', admissionYear: '', graduationYear: '' });
            setStep(3);
            setShowAlert(false);
            
        } else if (!person.admissionYear || !person.institution || !person.department || !person.faculty || !person.graduationYear || !person.level) {
            setShowAlert(true);
        } else {
            setShowAlert(true);
        }

    }
  return (
    <div className={styles.profile_container}>
        <div className={styles.heading}>
              <h2>Your Profile</h2>
              <h3>Educational Details</h3>
        </div>
        
          <div className={styles.form_container}>
              {!person.admissionYear && !person.department && !person.faculty && !person.graduationYear && !person.institution && !person.level && showAlert && <ErrorAlert showAlert={showAlert} setShowAlert={setShowAlert} />}

              <form action="" method='POST' onSubmit={handleSubmit}>
                  <div className={styles.form_control}>
                      <label htmlFor="institution">Institution</label>
                      <select name="institution" id="institution" value={person.institution} onChange={handleChange}>
                          <option value="default value">Select your institution</option>
                          <option value="University of Ibadan">University of Ibadan</option>
                          <option value="University of Ibadan">University of Ilorin</option>
                          <option value="University of Ibadan">Obafemi Awolowo University</option>
                      </select>
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="faculty">Faculty</label>
                      <input type="text" placeholder='Input your Faculty' id='faculty' name='faculty' onChange={handleChange} value={person.faculty} />
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="Department">Department</label>
                      <input type="text" placeholder='Input your Department' name='department' onChange={handleChange} value={person.department} />
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="level">Level</label>
                      <input type="text" id='level' placeholder='Input your Level' name='level' onChange={handleChange} value={person.level} />
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="admission-year">Year of Admission</label>
                      <select id="admission-year" name='admissionYear' onChange={handleChange} value={person.admissionYear}>
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
                     <label htmlFor="graduation-year">Expected year of graduation</label>
                     <select id="graduation-year" name='graduationYear' onChange={handleChange} value={person.graduationYear}>
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

                  <button type='submit' className={styles.submit_container}>
                      <span>Proceed</span>
                      <FaArrowRight className={styles.arrow} />
                  </button>
              </form>
              {!person.admissionYear || !person.department || !person.faculty || !person.graduationYear || !person.institution || !person.level && showAlert && <ErrorAlert showAlert={showAlert} setShowAlert={setShowAlert} />}
        </div>
    </div>
  )
}

export default Form2