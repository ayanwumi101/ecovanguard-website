import React, {useState, useEffect} from 'react'
import Form1 from './Form1/Form1'
import Form2 from './Form2/Form2'
import Form3 from './Form3/Form3'
import Profile from './Profile/Profile'

const FormContainer = () => {
    const [step, setStep] = useState(1);
    const [showAlert, setShowAlert] = useState(false);

  return (
      <div>
          {step === 1 && <Form1 setStep={setStep} showAlert={showAlert} setShowAlert={setShowAlert}  />}

          {step === 2 && <Form2 setStep={setStep} showAlert={showAlert} setShowAlert={setShowAlert} />}

          {step === 3 && <Form3 setStep={setStep} showAlert={showAlert} setShowAlert={setShowAlert} />}
          {step === 4 && <Profile setStep={setStep} showAlert={showAlert} setShowAlert={setShowAlert} />}
      </div>
  )
}

export default FormContainer