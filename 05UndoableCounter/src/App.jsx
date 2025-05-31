import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([])
  const [redoList, setRedoList] = useState([])

  const maintainHistory = (key, prev, curr) => {
    // console.log(key, prev, curr);
    const historyObj = {
      action: key,
      prev,
      curr
    }
    const copyHistory = [...history]
    copyHistory.unshift(historyObj)
    setHistory(copyHistory)

  }

  const handleCount = (key) => {
    const value = parseInt(key)
    maintainHistory(key, count, value + count)
    setCount((prev) => prev + value)

  }
  const handleUndo = () =>{
    if(history.length > 0){
      const copyHistory = [...history]
      const firstItem = copyHistory.shift()
      setHistory(copyHistory)
      setCount(firstItem.prev)

      const copyRedolist = [...redoList]
      copyRedolist.push(firstItem)
      setRedoList(copyRedolist)
      }

  }

  const handleRedo = () =>{
    if(redoList.length > 0){
      const copyRedoList = [...redoList]
      const firstItem = copyRedoList.pop()
      setRedoList(copyRedoList)
      setCount(firstItem.curr)
      const copyHistory = [...history]
      copyHistory.unshift(firstItem)  
      setHistory(copyHistory)

    }
  }

  return (
    <>
      <div className="App">
        <h1>Undoable counter</h1>
        <div className="action-btn">
          <button onClick={handleUndo} className={history.length > 0 ? '' : 'undo'}>Undo</button>
          <button onClick={handleRedo} className={redoList.length > 0 ? '' : 'redo'}>Redo</button>
        </div>
        <div className="counter-btn">
          {
            [-100, -10, -1].map((btn) => {
              return <button onClick={() => handleCount(btn)}>{btn}</button>
            })
          }
          <div className='output'>{count}</div>
          {
            ["+100", "+10", "+1"].map((btn) => {
              return <button onClick={() => handleCount(btn)}>{btn}</button>
            })
          }
        </div>
        <div className="counter-history">
          {
            history.map((item) => {
              return (
                <div className='history-data'>
                  <div>
                    {item.action}
                  </div>
                  <div>{`[${item.prev} => ${item.curr}]`}</div>
                </div>
                
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
