import React from 'react'
import {data} from './Data'
import Folder from './Folder'
import './structure.css'

export default function TreeViewFolder() {
    
  return (
    <div className='App'>
      <h1>Folder Structure</h1>
      <Folder files={data} />
    </div>
  )
}
