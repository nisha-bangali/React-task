import React, { useEffect, useState } from 'react'
import '../css/selectedGrid.css'

export default function SelectedGrid() {
  const [twoDMatrix, setTwoDMatrix] = useState([])
  const [startPos, setStartPos] = useState([])
  const [endPos, setEndPos] = useState([])

  const prepareTwoDMatrix = () => {
    let matrix = []
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        const obj = {
          pos: [i, j],
          isColored: false
        }
        matrix.push(obj)
      }
    }
    setTwoDMatrix(matrix)
  }

  useEffect(() => {
    prepareTwoDMatrix()
  }, [])

  const handdleOnDrag =(e, pos)=>{
    setStartPos(pos)
    prepareTwoDMatrix()
  }
  const handleOnDragOver = (e,pos)=>{
    setEndPos(pos)
  }
  const fillColor =(startPos,endPos)=>{
    const [startRow,startCol] = startPos
    const [endRow,endCol] = endPos
    const selectedGrid = []
    for(let i=startRow;i<=endRow;i++){
      for(let j=startCol;j<=endCol;j++){
        selectedGrid.push([i,j].join(''))
      }
    }
    let copyMatrix = [...twoDMatrix]
    copyMatrix = copyMatrix.map((item)=>{
      const {pos} = item
      const stringPos = pos.join('')
      if(selectedGrid.includes(stringPos)){
        item.isColored = true;
      }
      return item
    })
    setTwoDMatrix(copyMatrix)
  }

  useEffect(()=>{
    if(startPos.length>1 && endPos.length>1){
      fillColor(startPos,endPos)
    }
  },[startPos,endPos])
  return (
    <div id='App'>
      <h1>Selected Grid</h1>
      <div className="grid">
        <div className="board">
          {
            twoDMatrix?.map((item, idx) => (
              <div 
                draggable
                onDrag={(e)=>handdleOnDrag(e,item.pos)}
                onDragOver={(e)=> handleOnDragOver(e,item.pos)}
                className={`cell ${item.isColored ? 'selected-cell':''}`} 
                key={idx}>
                {item.pos}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
