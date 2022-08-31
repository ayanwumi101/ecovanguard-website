import React, {useState} from 'react'
import Form3 from './Form3/Form3';
import { useContext } from 'react';
import Form1 from './Form1/Form1';
import Profile2 from './Profile/Profile2';


const FormContainer2 = () => {
  const [step, setStep] = useState(1);
  return (
    <div>
        {step === 1 && <Form1 step={step} setStep={setStep} />}
        {step === 2 && <Form3 step={step} setStep={setStep} />}
        {step === 3 && <Profile2 />}
    </div>
  )
}

export default FormContainer2