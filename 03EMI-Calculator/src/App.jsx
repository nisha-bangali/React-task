import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [principal, setPrincipal] = useState(0)
  const [interest, setInterest] = useState(0)
  const [year, setYear] = useState(0)
 const [emi , setEMI] = useState(0)

  const handleChange = (e) => {
    const id = e.target.id
    const value = parseInt(e.target.value)
    if (id === 'principal') {
      setPrincipal(value)
    } else if (id === 'interest') {
      setInterest(value)
    } else {
      setYear(value)
    }

  }

  //P(r(1+r)^n/((1+r)^n)-1))

  const calculation = () => {
    let r = interest
    if (principal && interest && year) {
      r = r / 12 / 100
     const calcPow = Math.pow(1+r, year * 12)
     const amount = principal * ((r * calcPow) / (calcPow-1))
     setEMI(Math.round(amount))
    }
  }


  useEffect(() => {
    calculation()
  }, [principal, interest, year])



  return (
    <>
      <div className="emi-calc">
        <h1>Mortgage calculator</h1>
        <div className="inputs">
          <p>Principal:</p>
          <input
            onChange={handleChange}
            type="number" id="principal" />
          <p>Interest:</p>
          <input
            onChange={handleChange}
            type="number" id="interest" />
          <p>Years:</p>
          <input
            onChange={handleChange}
            type="number" id="year" />
        </div>
        {/* <button onClick={calculation}>Calculate</button> */}
        <div className="output">
          Your EMI is {emi}
        </div>
      </div>
    </>
  )
}

export default App
