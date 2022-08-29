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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At tenetur cum dicta aut tempore, necessitatibus incidunt illum, dolores enim cupiditate voluptate eos magnam molestiae nobis. Cupiditate autem vitae voluptates! Libero ullam unde veniam sit cupiditate facilis temporibus tempore illo quas!</p>
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