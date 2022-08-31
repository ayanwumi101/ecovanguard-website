import React, {useState, useEffect} from 'react'
import Form1 from './Form1/Form1'
import Form2 from './Form2/Form2'
import Profile from './Profile/Profile'

const FormContainer = () => {
  const [step, setStep] = useState(1);

  return (
      <div>
          {step === 1 && <Form1 setStep={setStep} step={step}  />}

          {step === 2 && <Form2 setStep={setStep} step={step} />}

          {step === 3 && <Profile setStep={setStep} step={step} />}
      </div>
  )
}

export default FormContainer