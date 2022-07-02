import React from 'react'
import styles from './styles.module.css'

const Form1 = () => {
  return (
    <div>
        <div className="heading">
              <h2>Your Profile</h2>
              <h4>Personal Details</h4>
        </div>

          <div className="uploads_container">
              <form action="">
                  <div className="form_control">
                     <input type="file" />
                  </div>

                  <div className="form_control">
                      <label htmlFor="fullname">Full Name</label>
                      <input type="text" placeholder='Input your first name' name='firstname' />
                  </div>

                  <div className="form_control">
                      <label htmlFor="email">Email</label>
                      <input type="email" placeholder='Input your active email' name='email' />
                  </div>

                  <div className="form_control">
                      <label htmlFor="age">Age</label>
                      <input type="text" placeholder='Input your Age' name='age' />
                  </div>

                  <div className="form_control">
                      <label htmlFor="social_account">Active Social Media Account</label>
                      <input type="text" placeholder='Input your account link' name='social_account' />
                  </div>

                  <div className="form_control">
                      <input type="submit" value='Proceed' />
                  </div>
              </form>
          </div>
    </div>
  )
}

export default Form1