
import React from 'react'

const ProductSimmerEffect = () => {
    const arr = Array(12).fill()
    
  return (
    <div className='flex justify-center items-center m-10 gap-5 flex-wrap'>
      {
        arr.map((item,idx)=>(
            <div className="w-2xs h-96 bg-gray-300 rounded-xl" key={idx}></div>
        ))
      }
    </div>
  )
}

export default ProductSimmerEffect
