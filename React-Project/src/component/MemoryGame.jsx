import React, { useEffect, useState } from 'react'
import '../css/game.css'

const getNums = () =>{
    let list = []
    for(let i=1; i<=8;i++){
        list.push(i)
        list.push(i)
    }
    return list
}
// console.log(getNums());

const MemoryGame = () => {
    const [nums , setNums] = useState(getNums())
    const [state, setState] = useState('init')
    const [opened, setOpened] = useState([])
    const [solveList, setSolveList] = useState([])

    const randomNums =()=>{
        let copyNum = [...nums]
        return copyNum.sort(() => Math.random() - 0.5)

    }
    
    
    const handleStart = () =>{
        setState('start')
        setNums(randomNums())
        setSolveList([])
    }
    const handleClick =(num,index)=>{
      if(opened.length==2)
        return
      setOpened((prev)=> [...prev,index])
    }

    useEffect(()=>{
      if(opened.length == 2){
        setTimeout(() => {
          const id1 = opened[0]
          const id2 = opened[1]
          if(nums[id1] == nums[id2]){
            setSolveList((prev)=> [...prev,nums[id1]])
              
        }
          setOpened([])
        
      }, 1000);
      }
    },[opened])

    useEffect(()=>{
      if(solveList.length===8){
        setState('won')
      }
    },[solveList])
    const getClassName = (num,index) =>{
      if(solveList.includes(num)){
        return 'remove'
      }else if(opened.includes(index)){
        return 'show'
      }else{
        return 'hide'
      }
    }
   
console.log(opened);

  return (
    <div>
      <h1>Memory Game </h1>
      { state == 'init' && <button onClick={handleStart} className='start-btn'>Play game</button>}
      {
        state === 'start' && 
        <div className='game'>
            <div className="cards">
                {
                    nums.map((num, index) =>(
                        <div className={`card ${getClassName(num,index)}`}
                         key={index}
                         onClick={() => handleClick(num,index)}
                         >{num}</div>
                    ))
                }
            </div>
        
        </div>
      }
      {
        state == 'won' &&
        <div>
            <h2>You won the Game!</h2>
            <button onClick={handleStart} className='play-again'>Play Again</button>
        </div>
      }
    </div>
  )
}

export default MemoryGame
