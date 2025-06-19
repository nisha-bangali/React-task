import React, { useState } from 'react'

export default function Folder({files}) {
  const [expand, setExpand] = useState(false)
    
  return (
    <div>
      <div onClick={() => setExpand(!expand)}>
        {
            files.isFolder ? (
                <button className={ expand ? 'expand' : 'btn' }>{'>'}</button>
            ): null
        }
        {files.name}
      </div>
      {
        files.isFolder && expand && 
        files.children.map((exp) => (
            <div style={{paddingLeft: '20px'}}>
                <Folder files={exp} />
            </div>
        ))
      }
    </div>
  )
}
