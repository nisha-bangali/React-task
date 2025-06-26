 
 import React from 'react'
 import Tab from './Tab'
 import './tab.css' 
 
 const CostomTab = () => {
   return (
     <div>
       <h1>Costom Tab</h1>
       <Tab>
            <div title='Home'>Tab content for Home</div>
            <div title='About'>Tab content for About</div>
            <div title='Contact'>Tab content for Contact</div>
       </Tab>
     </div>
   )
 }
 
 export default CostomTab
 