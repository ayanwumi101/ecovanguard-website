import React, {useState} from 'react'
import Form4 from './Form4/Form4';
import Form3 from './Form3/Form3';
import Profile from './Profile/Profile';


const FormContainer2 = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
        {step === 1 && <Form4 step={step} setStep={setStep} />}
        {step === 2 && <Form3 step={step} setStep={setStep} />}
        {step === 3 && <Profile />}
    </div>
  )
}

export default FormContainer2