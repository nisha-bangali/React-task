import React, { useEffect, useState } from 'react'
import'./App.css'

function FAQItem({faq , index}) {
    const [isshow, setIsshow] = useState(false)


useEffect(() => {
    if(index == 0){
        setIsshow(true)
    }
},[])
const handleChange = () =>{
    setIsshow((isshow) => !isshow)
}


  return (
    <div className="faq-box">
        <div className="que" onClick={handleChange}>
            <button className= {isshow ? 'active' : ''}>></button>
            <p>{faq.question}</p>
        </div>
        {
            isshow && (<div className='ans'>
                <p>{faq.answer}</p>
          </div>)
        }
    </div>
  )
}

export default FAQItem
