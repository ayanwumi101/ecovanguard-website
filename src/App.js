import React, {useState} from 'react'
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Donate from './components/Donate/Donate'
import Navbar from './components/Navbar/Navbar'
import FormContainer from './components/ProfileForms/FormContainer'
import Projects from './components/Projects/Projects'
import styles from './styles.module.css'
import Posts from './components/Posts/Posts'
import SinglePost from './components/SinglePost/SinglePost'
import FormOption from './components/ProfileForms/FormOption'
import FormContainer2 from './components/ProfileForms/FormContainer2'
export const FormContext = React.createContext();

const App = () =>  {

   const [formData, setFormData] = useState({});

    const updateForm = (newObject) => {
      console.log("New Object ", newObject)
      setFormData(prev => {
        const q = {...prev, ...newObject}
        return q
      })
    }

  return (
    <div className={styles.app}>
      <FormContext.Provider value={[formData, updateForm]}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/donate' element={<Donate />} />
          <Route exact path='/blog' element={<Posts />} />
          <Route exact path='/blog/:slug' element={<SinglePost />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/create_account' element={<FormOption />} />
          <Route exact path='/create_account/higher_institution' element={<FormContainer />}/>
          <Route exact path='/create_account/secondary_school' element={<FormContainer2 />}/>
        </Routes>
      </Router>
      </FormContext.Provider>
    </div>
  );
}

export default App;
