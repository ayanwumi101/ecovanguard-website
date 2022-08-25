import React, {useState} from 'react'
import styles from './styles.module.css'
import Alert,{ErrorAlert} from '../FormAlert/Alert'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import {useFormik} from 'formik'
import * as yup from 'yup'


const Form3 = ({setStep, step}) => {

    const handleStep = () => {
        setStep(step - 1);
    }

    const formik = useFormik({
        initialValues: {
            school_name: '',
            school_location: '',
            class: '',
            admission_year: '',
            graduation_year: '',
        }, 
        validationSchema: yup.object({
            school_name: yup.string().required('Please select your school'),
            school_location: yup.string().required('Please select your school address'),
            class: yup.string().required('Please select your class'),
            admission_year: yup.string().required('Please select your admission year'),
            graduation_year: yup.string().required('Please select your graduation year'),
        }),

        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            setStep(3);
        }
    })
   
  return (
    <div className={styles.details_container}>
        <div className={styles.heading}>
              <h2>Your Profile</h2>
              <h4>Details with club</h4>
        </div>
        
          <div className={styles.form_container}>
              
              <form action="" onSubmit={formik.handleSubmit}>
                  <div className={styles.form_control}>
                      <label htmlFor="school_name">School Name</label>
                      <select name="school_name" id="school_name" onChange={formik.handleChange} value={formik.values.school_name}>
                          <option value="select your class">Select your school</option>
                          <option value="Polythecnic High School">Polythecnic High School</option>
                          <option value="Al Qalam Schools">Al Qalam Schools</option>
                          <option value="As-Sabaq College">As-Sabaq College</option>
                      </select>
                      {formik.errors.school_name ? <div className={styles.error_text}>{formik.errors.school_name}</div> : null}
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="school_location">School's Location</label>
                      <select name="school_location" id="school_location" value={formik.values.school_location} onChange={formik.handleChange}>
                          <option value="select your position">Select the location of your school</option>
                          <option value="No 7, Farayola layout, Bodija Ibadan.">No 7, Farayola layout, Bodija Ibadan.</option>
                          <option value="The polythecnic high school, Ijokodo, Ibadan">The polythecnic high school, Ijokodo, Ibadan.</option>
                          <option value="Olounde estate, Eleyele/Eruwa road, Ologuneru Ibadan">Olounde estate, Eleyele/Eruwa road, Ologuneru Ibadan.</option>
                      </select>
                      {formik.errors.school_location ? <div className={styles.error_text}>{formik.errors.school_location}</div> : null}
                  </div>


                  <div className={styles.form_control}>
                        <label htmlFor="class">Class</label>
                        <select name="class" id="class" onChange={formik.handleChange} value={formik.values.class}>
                          <option value="select your class">Select your class</option>
                          <option value="JSS1">JSS1</option>
                          <option value="JSS2">JSS2</option>
                          <option value="JSS3">JSS3</option>
                          <option value="SS1">SS1</option>
                          <option value="SS2">SS2</option>
                          <option value="SS3">SS3</option>
                        </select>
                        {formik.errors.class ? <div className={styles.error_text}>{formik.errors.class}</div> : null}
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="admission_year">Year of Admission</label>
                      <select name="admission_year" id="admission_year" onChange={formik.handleChange} value={formik.values.admission_year}>
                          <option value="select your position">Select your admission year</option>
                          <option value="2015">2015</option>
                          <option value="2016">2016</option>
                          <option value="2017">2017</option>
                          <option value="2018">2018</option>
                          <option value="2019">2019</option>
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="other">Other</option>
                      </select>
                      {formik.errors.admission_year ? <div className={styles.error_text}>{formik.errors.admission_year}</div> : null}
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="graduation_year">Expected Year of Graduation</label>
                      <select name="graduation_year" id="graduation_year" onChange={formik.handleChange} value={formik.values.graduation_year}>
                          <option value="select your position">Select your expected graduation year</option>
                          <option value="20">2022</option>
                          <option value="2016">2023</option>
                          <option value="2017">2024</option>
                          <option value="2018">2025</option>
                          <option value="2019">2026</option>
                          <option value="2020">2027</option>
                          <option value="Other">Other</option> 
                      </select>
                      {formik.errors.graduation_year ? <div className={styles.error_text}>{formik.errors.graduation_year}</div> : null}
                  </div>

                  <div className={styles.submit_container}>
                        <button onClick={handleStep}><FaArrowLeft/> Go Back</button>
                        <button type='submit'>Submit <FaArrowRight /></button>
                  </div>
              </form>
          </div>
    </div>
  )
}

export default Form3