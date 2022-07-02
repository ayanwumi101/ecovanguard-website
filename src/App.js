import React from 'react'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Form1 from './components/ProfileForms/Form1/Form1'
import Form2 from './components/ProfileForms/Form2/Form2'
import Form3 from './components/ProfileForms/Form3/Form3'
import Profile from './components/ProfileForms/Profile/Profile'
import styles from './styles.module.css'



const App = () =>  {
  return (
    <div className={styles.app}>
      <Navbar />
      {/* <Profile /> */}
      {/* <Form2 /> */}
      <Form1 /> 
    </div>
  );
}

export default App;
