import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const emptyArr = ['','','','']
  const refs = [useRef(),useRef(),useRef(),useRef()]
  const [inputs , setInputs] = useState(emptyArr)
  const [missing, setMissing] = useState(emptyArr)
  const OTPCode = '1234';

  useEffect(() => {
      refs[0].current.focus()
  },[])

  const handleInputChange =(e, index) => {
    // console.log(e.target.value , index);
    const value = e.target.value;
    if(!Number(value))
      return

    if(index < inputs.length -1){
      refs[index + 1].current.focus()
    }

  const copyInput = [...inputs]
  copyInput[index] = value
  setInputs(copyInput)

  }
  const handlekeyDown =(e,index) =>{
    // console.log(e.keyCode , index);
    if(e.keyCode === 8){
      const copyInput = [...inputs]
      copyInput[index] = '' 
      setInputs(copyInput)

      if(index > 0){
        refs[index - 1].current.focus()
      }
    }
    
  }
  const handlePaste = (e) =>{
    const data = e.clipboardData.getData('text')
    if(!Number(data) || data.length !== inputs.length)
      return

    const pasteCode = data.split('')
    setInputs(pasteCode)
    refs[inputs.length - 1].current.focus()
    
  }
  const handleSubmit =() =>{
   
    const missed = inputs.map((item ,i ) =>{
      if(item === '')
        return i
    }).filter((item) => (item || item === 0))
    setMissing(missed)

    if(missed.length){
      return
    }
    const userInput = inputs.join('')
    const isMatch = userInput === OTPCode;
    const msg = isMatch ? 'OTP is correct' : 'OTP is incorrect'
    alert(msg)
    setInputs(emptyArr)
  }

  return (
    <>
     <div className="App">
      <h1>Two-factor code input</h1>
      <div>
        {
          emptyArr.map((item ,i) => {
            return <input 
                    value={inputs[i]}
                    key={i}
                    ref={refs[i]}
                    type='text'
                    maxLength={1}
                    onPaste={handlePaste}
                    onChange={(e) => handleInputChange(e,i)}
                    onKeyDown={(e) => handlekeyDown(e,i)}
                    className={missing.includes(i) ? 'error' : ''}
                   />
          })
        }
      </div>
      <button onClick={handleSubmit}>Submit</button>
     </div>
    </>
  )
}

export default App
