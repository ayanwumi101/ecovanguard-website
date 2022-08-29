import React, {useState, useEffect} from 'react'
import Form1 from './Form1/Form1'
import Form2 from './Form2/Form2'
import Profile from './Profile/Profile'
export const FormContext = React.createContext();

const FormContainer = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState([]);

  return (
      <div>
        <FormContext.Provider value={[formData, setFormData]}>
          {step === 1 && <Form1 setStep={setStep} step={step}  />}

          {step === 2 && <Form2 setStep={setStep} step={step} />}

          {step === 3 && <Profile setStep={setStep} step={step} />}
        </FormContext.Provider>
      </div>
  )
}

export default FormContainer