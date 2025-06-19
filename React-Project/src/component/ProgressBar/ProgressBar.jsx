
import React from 'react'

export default function ProgressBar({progress,color}) {
    const styleObj = {
        width: `${progress}%`,
        backgroundColor: color || 'lightgreen',
        height: '30px',
        borderRadius: '20px'
    }
  return (
    <div className='container'>
      <div className="progress-bar">
        <div style={styleObj}>
            {`${progress}%`}
        </div>
      </div>
    </div>
  )
}
