import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'
import './progress.css'

export default function Progress() {
    const [progress,setProgress] = useState(0)

    useEffect(()=>{
        const time = setInterval(() => {
            if(progress < 100){
                setProgress((p)=> p+1)
            }
        }, 20);
        return () => {
            clearInterval(time)
        }
    },[progress])
  return (
    <div className='App'>
      <h1>Progress Bar</h1>
      <ProgressBar 
        progress={progress}
        color={'yellow'}
      />
      <ProgressBar 
        progress={progress}
        color={'lightgreen'}
      />
      <ProgressBar 
        progress={progress}
        color={'pink'}
      />
    </div>
  )
}
