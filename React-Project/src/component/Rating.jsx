import React, { useState } from 'react'
import '../css/rating.css'

export default function Rating() {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
  return (
    <div id='container'>
      <h1>Star Rating</h1>
       <div className="stars">
       {
        [1,2,3,4,5].map((num)=>(
            <button
               className='star'
                key={num}
                onClick={() => setRating(num)}
                onMouseOver={() => setHover(num)}
                onMouseLeave={() => setHover(rating)}
            >
               <span 
                  className={ `star ${num <= ((rating && hover) || hover) ? 'on' : 'off'} ` }>
                    
                  &#9733;  
                </span>
            </button>
        ))
       }
       </div>
    </div>
  )
}
