import React, {useState, useEffect} from 'react'
import styles from './styles.module.css'
import { FaCamera, FaArrowRight } from 'react-icons/fa';
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useContext } from 'react';
import { FormContext } from '../../../App';


const Form1 = ({setStep}) => {

    const [formData, updateForm] = useContext(FormContext);
    // console.log(formData, setFormData);
    const towns = [
        'Aba',
        'Arochukwu',
        'Umuahia',
        'Jimeta',
        'Mubi',
        'Numan',
        'Ikot Abasi',
        'Ikot Ekpene',
        'Oron',
        'Uyo',
        'Awka',
        'Onitsha',
        'Azare',
        'Bauchi',
        "Jama'are",
        'Katagum',
        'Misau',
        'Brass',
        'Makurdi',
        'Biu',
        'Dikwa',
        'Maiduguri',
        'Calabar',
        'Ogoja',
        'Asaba',
        'Burutu',
        'Koko',
        'Sapele',
        'Ughelli',
        'Warri',
        'Abakaliki',
        'Benin city',
        'Ado Ekiti',
        'Efon Alaye',
        'Ikere-Ekiti',
        'Abuja',
        'Deba Habe',
        'Gombe',
        'Kumo',
        'Owerri',
        'Birnin Kudu',
        'Dutse',
        'Gumel',
        'Hadejia',
        'Kazaure',
        'Jemaa',
        'Kaduna',
        'Zaria',
        'Kano',
        'Daura',
        'Katsina',
        'Argungu',
        'Birnin Kebbi',
        'Gwandu',
        'Yelwa',
        'Idah',
        'Kabba',
        'Lokoja',
        'Okene',
        'Ilorin',
        'Jebba',
        'Lafiagi',
        'Offa',
        'Pategi',
        'Badagry',
        'Epe',
        'Ikeja',
        'Ikorodu',
        'Lagos',
        'Mushin',
        'Shomolu',
        'Keffi',
        'Lafia',
        'Nasarawa',
        'Agale',
        'Baro',
        'Bida',
        'Kotangora',
        'Lapai',
        'Minna',
        'Suleja',
        'Abeokuta',
        'Ijebu Ode',
        'Ilaro',
        'Shagamu',
        'Akure',
        'Ikare',
        'Oka-Akoko',
        'Ondo',
        'Owo',
        'Ede',
        'Ikire',
        'Ikirun',
        'Ila',
        'Ile-Ife',
        'Ilesha',
        'Ilobu',
        'Inisa',
        'Iwo',
        'Oshogbo',
        'Ibadan',
        'Iseyin',
        'Ogbomosho',
        'Oyo',
        'Saki',
        'Bukuru',
        'Jos',
        'Vom',
        'Wase',
        'Bonny',
        'Degema',
        'Okrika',
        'Port-Harcourt',
        'Sokoto',
        'Ibi',
        'Jalingo',
        'Muri',
        'Damaturu',
        'Nguru',
        'Gusau',
        'Kaura Namoda'
    ]
    const [submit, setSubmit] = useState(false)
    useEffect(() => {
      if (formData.firstName && submit) {
        setStep(2);
      }
    }, [formData, submit])
    
    const formik = useFormik({
        initialValues: {
            avatar: '',
            firstName: formData.firstName ? formData.firstName : '',
            email: formData.email ? formData.email : '',
            age:  formData.age ? formData.age : '',
            city: formData.city ? formData.city : '',
        },

        validationSchema: yup.object({
            firstName: yup.string().required('Please input your first name').min(10, "Full name should  not be less than 10 characters"),
            age: yup.number().required('Please input your age').integer(),
            email: yup.string().required('Please input your email').email('Please input a valid email'),
            city: yup.string().required('Please select your city'),
            avatar: yup.string().required('Please upload a profile image'),
        }),

        onSubmit: values => {
            updateForm(values);
            setSubmit(true);
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
                      <label htmlFor="social_account">City or Town of Residence</label>
                      <select name="city" id="city" value={formik.values.city} onChange={formik.handleChange}>
                        <option value="select city">Select your city</option>
                        {towns.map((town, index) => {
                            return(
                                <>
                                   <option value={town}>{town}</option>
                                </>
                            )
                        })}
                      </select>
                      {formik.errors.city ? <div className={styles.error_text}>{formik.errors.city}</div> : null}
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