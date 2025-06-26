import React, { useEffect, useState } from 'react'

const Tab = (props) => {

    const [tabHeader, setTabHeader] = useState([])
    const [contentMap, setContentMap] = useState({})
    const [active, setActive] = useState('')
    const {children} = props

    useEffect(()=>{
        const header = []
        const map = {}
        React.Children.forEach(children,(element)=>{
            if(!React.isValidElement(element)){
                return;
            }
            const {title} = element.props
            header.push(title)
            map[title] = element.props.children
           
        })
        
        setTabHeader(header)
        setActive(header[0])
        setContentMap(map)
        
    },[props,children])
    
    const changeTab = (header) =>{
        setActive(header)
    }

  return (
    <div>
      <div className="costom-tab">
        {
            tabHeader.map((header)=>(
                <button 
                 className= {active === header ? 'active':''}
                 key={header}
                 onClick={()=> changeTab(header)}
                >
                    {header}
                </button>
            ))
        }
      </div>
      <div>
        {
            Object.keys(contentMap).map((key,idx)=>{
               if(key === active){
                return <div key={idx} 
                        className='content'
                        >
                        {contentMap[key]}
                </div>
               }else{
                return null;
               }
        })
        }
      </div>
    </div>
  )
}

export default Tab
