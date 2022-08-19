import React, {useState} from 'react'
import styles from './styles.module.css'
import { FaCamera, FaArrowRight } from 'react-icons/fa';
import {useFormik} from 'formik'
import * as yup from 'yup'



const Form1 = ({setStep,showAlert, setShowAlert}) => {

    const formik = useFormik({
        initialValues: {
            avatar: '',
            firstName: '',
            email: '',
            age: '',
            social_account: '',
        },

        validationSchema: yup.object({
            firstName: yup.string().required('Please input your first name').min(10, "Full name should  not be less than 10 characters"),
            age: yup.number().required('Please input your age').integer(),
            email: yup.string().required('Please input your email').email('Please input a valid email'),
            social_account: yup.string().url().nullable().required('Please fill out this field'),
            avatar: yup.string().required('Please upload a profile image'),
        }),

        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            setStep(2);
        },
    });
    
  return (
    <div className={styles.first_form_container}>
        <div className={styles.heading}>
              <h2>Your Profile</h2>
              <h4>Personal Details</h4>
        </div>
          <div className={styles.uploads_container}>
              <form action="" className={styles.form_container} onSubmit={formik.handleSubmit}>
                  <div className={styles.image_upload}>
                      <label htmlFor="upload" className={styles.upload}>
                          <input type="file" accept='image/png, image/jpg, image/jpeg, image/gif' id="upload" name='avatar' value={formik.values.avatar} onChange={formik.handleChange} className={formik.errors.avatar ? `${styles.error}` : `${styles.success}`} />
                          <div className={styles.camera_container}><FaCamera className={styles.camera} /></div>
                      </label>
                      <span>{ formik.values.avatar}</span>
                      {formik.errors.avatar ? <div className={styles.error_text}>{formik.errors.avatar}</div> : null}
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="fullname">Full Name</label>
                      <input type="text" placeholder='Input your first name' name='firstName' value={formik.values.firstName} onChange={formik.handleChange} className={formik.errors.firstName ? `${styles.error}` : `${styles.success}`} />
                      {formik.errors.firstName ? <div className={styles.error_text}>{formik.errors.firstName}</div> : null}
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="email">Email</label>
                      <input type="email" placeholder='Input your active email' name='email' value={formik.values.email} onChange={formik.handleChange} />
                      {formik.errors.email ? <div className={styles.error_text}>{formik.errors.email}</div> : null}
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="age">Age</label>
                      <input type="text" placeholder='Input your Age' name='age' value={formik.values.age} onChange={formik.handleChange} />
                      {formik.errors.age ? <div className={styles.error_text}>{formik.errors.age}</div> : null}
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="social_account">Active Social Media Account</label>
                      <input type="text" placeholder='Input your account link' name='social_account' value={formik.values.social_account} onChange={formik.handleChange} />
                      {formik.errors.social_account ? <div className={styles.error_text}>{formik.errors.social_account}</div> : null}
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

export default Form1