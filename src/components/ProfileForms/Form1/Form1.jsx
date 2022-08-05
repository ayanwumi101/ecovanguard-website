import React, {useState} from 'react'
import styles from './styles.module.css'
import { FaCamera, FaArrowRight } from 'react-icons/fa';
import { ErrorAlert } from '../FormAlert/Alert';



const Form1 = ({setStep,showAlert, setShowAlert}) => {

    const [person, setPerson] = useState({avatar: '', firstName: '', email: '', age: '', social_account: ''})
    const [people, setPeople] = useState([]);
    


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value })
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (person.firstName && person.age && person.avatar && person.social_account && person.email) {

            const newPerson = { ...person, id: new Date().getTime().toString() };
            setPeople([...people, newPerson]);
            setPerson({ avatar: '', firstName: '', email: '', age: '', social_account: '' });
            setStep(2);
            setShowAlert(false);

        } else if (!person.firstName || !person.age || !person.avatar || !person.social_account || !person.email) {
            setShowAlert(true);
        } else {
            setShowAlert(true);
        }
            
        

    }
    
  return (
    <div className={styles.first_form_container}>
        <div className={styles.heading}>
              <h2>Your Profile</h2>
              <h4>Personal Details</h4>
        </div>
          <div className={styles.uploads_container}>
              <form action="" className={styles.form_container} onSubmit={handleSubmit}>
                  <div className={styles.image_upload}>
                      <label htmlFor="upload" className={styles.upload}>
                          <input type="file" accept='image/png, image/jpg, image/jpeg, image/gif' id="upload" name='avatar' value={person.avatar} onChange={handleChange} />
                          <div className={styles.camera_container}><FaCamera className={styles.camera} /></div>
                      </label>
                      <span>{ person.avatar}</span>
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="fullname">Full Name</label>
                      <input type="text" placeholder='Input your first name' name='firstName' value={person.firstName} onChange={handleChange} />
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="email">Email</label>
                      <input type="email" placeholder='Input your active email' name='email' value={person.email} onChange={handleChange} />
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="age">Age</label>
                      <input type="text" placeholder='Input your Age' name='age' value={person.age} onChange={handleChange} />
                  </div>

                  <div className={styles.form_control}>
                      <label htmlFor="social_account">Active Social Media Account</label>
                      <input type="text" placeholder='Input your account link' name='social_account' value={person.social_account} onChange={handleChange} />
                  </div>

                  <button type='submit' className={styles.submit_container}>
                      <span>Proceed</span>
                      <FaArrowRight className={styles.arrow} />
                  </button>
              </form>
              {!person.firstName && !person.age && !person.avatar && !person.social_account && !person.email && showAlert && <ErrorAlert setShowAlert={setShowAlert} />}
              {!person.firstName || !person.age || !person.avatar || !person.social_account || !person.email && showAlert && <ErrorAlert setShowAlert={setShowAlert} />}
          </div>
    </div>
  )
}

export default Form1