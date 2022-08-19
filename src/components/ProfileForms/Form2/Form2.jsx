import React,{useState} from 'react'
import styles from './styles.module.css'
import { FaArrowRight } from 'react-icons/fa'
import {useFormik} from 'formik'
import * as yup from 'yup'


const Form2 = ({ setStep, showAlert, setShowAlert }) => {

    const formik = useFormik({
        initialValues: {
            institution: '',
            faculty: '',
            department: '',
            level: '',
            admission: '',
            graduation: '',
        },

        validationSchema: yup.object({
            institution: yup.string().required('Please select an institution'),
            faculty: yup.string().required('Please input your faculty'),
            department: yup.string().required('Please input your department'),
            level: yup.number().required('Please input your current level of study').min(100, 'Your level cannot be less than 100'),
            admission: yup.string().required('Please select your admission year'),
            graduation: yup.string().required('please select your graduation year'),
        }),

        onSubmit: values => {
            setStep(3);
            // alert(JSON.stringify(values, null, 2));
        },
    });
  return (
    <div className={styles.profile_container}>
        <div className={styles.heading}>
              <h2>Your Profile</h2>
              <h3>Educational Details</h3>
        </div>
        
          <div className={styles.form_container}>
              
              <form action="" method='POST' onSubmit={formik.handleSubmit}>
                  <div className={styles.form_control}>
                      <label htmlFor="institution">Institution</label>
                      <select name="institution" id="institution" value={formik.values.institution} onChange={formik.handleChange}>
                          <option value="default value">Select your institution</option>
                          <option value="University of Ibadan">University of Ibadan</option>
                          <option value="University of Ibadan">University of Ilorin</option>
                          <option value="University of Ibadan">Obafemi Awolowo University</option>
                      </select>
                      {formik.errors.institution ? <div className={styles.error_text}>{formik.errors.institution}</div> : null}
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="faculty">Faculty</label>
                      <input type="text" placeholder='Input your Faculty' id='faculty' name='faculty' onChange={formik.handleChange} value={formik.values.faculty} />
                      {formik.errors.faculty ? <div className={styles.error_text}>{formik.errors.faculty}</div> : null}
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="Department">Department</label>
                      <input type="text" placeholder='Input your Department' name='department' onChange={formik.handleChange} value={formik.values.department} />
                      {formik.errors.department ? <div className={styles.error_text}>{formik.errors.department}</div> : null}
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="level">Level</label>
                      <input type="text" id='level' placeholder='Input your Level' name='level' onChange={formik.handleChange} value={formik.values.level} />
                      {formik.errors.level ? <div className={styles.error_text}>{formik.errors.level}</div> : null}
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="admission">Year of Admission</label>
                      <select id="admission" name='admission' onChange={formik.handleChange} value={formik.values.admission}>
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
                      {formik.errors.admission ? <div className={styles.error_text}>{formik.errors.admission}</div> : null}
                  </div>

                  <div className={styles.form_control}>
                     <label htmlFor="graduation">Expected year of graduation</label>
                     <select id="graduation" name='graduation' onChange={formik.handleChange} value={formik.values.graduation}>
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
                      {formik.errors.graduation ? <div className={styles.error_text}>{formik.errors.graduation}</div> : null}
                  </div>

                  <button type='submit' className={styles.submit_container}>
                      <span>Proceed</span>
                      <FaArrowRight className={styles.arrow} />
                  </button>
              </form>
            
        </div>
    </div>
  )
}

export default Form2