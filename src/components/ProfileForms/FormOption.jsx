import React, {useState} from 'react'
import styles from './styles.module.css'
import {AiOutlineUser, AiOutlineUsergroupAdd} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const FormOption = () => {

  return (
    <>
            <div className={styles.container}>
                <div className="heading">
                    <h2>Become a Registered Ecovanguard Member</h2>
                    <p>
                        Are you interested in protecting the one thing you have in common with everyone? Are you ready to take a step ahead and be a part of the greener environment movement? Or you are intrigued by the beauty of nature? Why not seize the monment and take the environment to the next level?
                    </p>
                    <h4>Be a member today!</h4>
                </div>

                <h3>Register As</h3>
                <div className={styles.options}>
                    <Link to="/create_account/secondary_school">
                    <div className={styles.option}>
                        <div><AiOutlineUsergroupAdd className={styles.option_icon} /></div>
                        <button>High school student</button>
                    </div>
                    </Link>

                    <Link to="/create_account/higher_institution">
                    <div className={styles.option}>
                        <div><AiOutlineUser className={styles.option_icon} /></div>
                        <button>University student</button>
                    </div>
                    </Link>
                </div>
            </div>
    </>
  )
}

export default FormOption