import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const calcBtn = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", ".", "0", "X", "/", "C", "%", "()", "="]
  const [value, setValue] = useState('')

  const handleValue = (e) => {
    setValue(e.target.value)
  }
  const handleClick = (e) => {
    const id = e.target.id
    if (id === "C") {
      setValue('')
    } else if (id === "=") {
      handleSubmit()
    } else if (id === '%') {
      const parts = value.split(/[\+\-\*\/]/);
      const lastNum = parts[parts.length - 1];
      const percentValue = parseFloat(lastNum) / 100;
      setValue(value.slice(0, -lastNum.length) + percentValue);
    }else if(id === 'X'){
      handleBackspace()
    }
    else {
      setValue((val) => val + id)
    }

  }
  const handleSubmit = (e) => {
    e?.preventDefault()
    try {
      const result = eval(value)
      setValue(result)

    } catch (error) {
      alert("Invalid Input")
    }
  }

  const handleBackspace = () => {
    setValue((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <div className="container">
        <h1>Calculator</h1>
        <div className="calculator">
          <form onSubmit={handleSubmit}>
            <input type="text"
              value={value}
              onChange={handleValue} />
          </form>
          <div className='buttons' onClick={handleClick}>
            {
              calcBtn.map((btn, index) => {
                return <button
                  id={btn}
                  key={index}
                  className='cell'
                >{btn}</button>
              })
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App
