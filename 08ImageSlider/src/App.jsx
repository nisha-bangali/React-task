import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(0)

 async function imagesApi(){
   const res = await fetch('https://www.reddit.com/r/aww/top/.json?t=all')
   const data = await res.json() 
   const list = data.data.children.filter((data)=>{
    return data.data.url.includes('jpg')
   }).map((item) => {
     return item.data.url_overridden_by_dest
   })
   setImages(list)
  }

  useEffect(()=>{
      imagesApi()
  },[])

 const handleClick =(direction)=>{
   if(direction === 'left'){
    if(index === 0){
      setIndex(images.length - 1)
    }else{
      setIndex((idx) => idx-1)
    }
   }else if(direction === 'right'){
    if(index === images.length - 1){
      setIndex(0)
    }else{
      setIndex((idx) => idx+1)
    }
   }
 }

 useEffect(() => {
  let tid = setInterval(() => {
    handleClick('right')
  }, 1000);

  return()=>{
    clearInterval(tid)
  }
 },[index])
  
  return (
    <>
     <div className="App">
        <button
         onClick={() => handleClick('left')}
         className='left-arrow'>{'<'}</button>
        <img src={images[index]} alt="Images" />
        <button 
          onClick={() => handleClick('right')}
        className='right-arrow'>{'>'}</button>
     </div>
    </>
  )
}

export default App
