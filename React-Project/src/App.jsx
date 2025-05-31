import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [second, setSecond] = useState(0)
  const [timerId, setTimerId] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const handleStart = () => {
    if (hours < 0 || minutes < 0 || second <= 0) {
      alert("Invalid Time")
      return
    } else {
      setIsStart(true)
    }
  }

  const handlePause = () => {
    setIsPaused(true)
    clearInterval(timerId)
  }

  const handleResume = () => {
    setIsPaused(false)
    runTimer(second, minutes, hours);
  }

  const resetTimer = () => {
    setIsStart(false)
    setHours(0)
    setMinutes(0)
    setSecond(0)
    clearInterval(timerId)
  }

  const handleReset = () => {
    resetTimer()
  }
  const inputChange = (e) => {
    const value = parseInt(e.target.value)
    const id = e.target.id
    if (id === 'hours') {
      setHours(value)
    } else if (id === 'minutes') {
      setMinutes(value)
    } else {
      setSecond(value)
    }
  }

  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSecond((s) => s - 1)
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1)
      setSecond(59)
    } else if (min === 0) {
      setHours((h) => h - 1)
      setMinutes(59)
      setSecond(59)
    }

    if (sec === 0 && min === 0 && hr === 0) {
      resetTimer()
      alert('Timer is finished')
      return
    }
  }

  useEffect(() => {
    let tId;
    if (isStart) {
      tId = setInterval(() => {
        runTimer(second, minutes, hours, tId);
      }, 1000);
      setTimerId(tId)
    }
    return () => {
      clearInterval(tId)
    }
  }, [isStart, hours, minutes, second])

  return (
    <>
      <div className="counter-container">
        <h1>Countdown Timer</h1>
        {
          !isStart && (
            <div className="counter">
              <div className="input-box">
                <input id='hours' placeholder='HH' onChange={inputChange} />
                <input id='minutes' placeholder='MM' onChange={inputChange} />
                <input id='seconds' placeholder='SS' onChange={inputChange} />
              </div>
              <button className='timer-button' onClick={handleStart}>Start</button>
            </div>
          )
        }
        {
          isStart && (
            <div className="show-counter-container">
              <div className="show-counter">
                <div>{hours < 10 ? `0${hours}` : hours}</div>
                <span>:</span>
                <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
                <span>:</span>
                <div>{second < 10 ? `0${second}` : second}</div>
              </div>
              <div className="action-buttons">
                {
                  !isPaused && (
                    <button className='pause-button' onClick={handlePause}>Pause</button>
                  )
                }
                {
                  isPaused && (
                    <button className='resume-button' onClick={handleResume}>Resume</button>
                  )
                }
                <button className='reset-button' onClick={handleReset}>Reset</button>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
