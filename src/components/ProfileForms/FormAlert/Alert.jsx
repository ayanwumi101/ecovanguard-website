import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import {FaCheck, FaTimes} from 'react-icons/fa'

const Alert = ({setShowAlert}) => {
    
    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);
    }, []);


  return (
    <>
        <div className={styles.modal}>
                <div className={styles.modal_content}>
                    <div>
                        <div className={styles.check_icon}>
                            <FaCheck className={styles.success} /> 
                        </div>
                        <h3>Success!</h3>
                    </div>


                    <div>
                        <p>
                            Account created successfully
                        </p>
                    </div>

                    
                </div>
        </div>
    </>
  )
}

export default Alert





export const ErrorAlert = ({ setShowAlert }) => {
    
    
    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false);
        }, 2000)
    }, []);


    return (
        <>
            <div className={styles.modal}>
                <div className={styles.modal_content}>
                    <div>
                        <div className={styles.check_icon}>
                            <FaTimes className={styles.error} />
                        </div>
                        <h3>Error!</h3>
                    </div>


                    <div>
                        <p>
                            Please fill out all the fields
                        </p>
                    </div>

                    
                </div>
            </div>
        </>
    )
}