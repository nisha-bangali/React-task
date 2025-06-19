// import { useEffect, useState } from 'react'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './component/Header'
import Rating from './component/Rating'
import CountdownTImer from './component/Timer'
import MemoryGame from './component/MemoryGame'
import TicTacToe from './component/TicTacToe'
import InfiniteScrolling from './component/InfiniteScrolling'
import JobBoard from './component/JobBoard'
import TreeViewFolder from './component/structureFolder/TreeViewFolder'
import Progress from './component/ProgressBar/Progress'
import FilterList from './component/filterData/FilterList'
import SelectedGrid from './component/SelectedGrid'
import DragNDrop from './component/DragNDrop'


function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<CountdownTImer />} />
      <Route path="/rating" element={<Rating />} />
      <Route path="/memoryGame" element={<MemoryGame />} />
      <Route path="/tictacgame" element={<TicTacToe />} />
      <Route path="/infiniteScrolling" element={<InfiniteScrolling />} />
      <Route path="/dragNdrop" element={<DragNDrop />} />
      <Route path="/folders" element={<TreeViewFolder />} />
      <Route path="/progressBar" element={<Progress />} />
      <Route path="/filterdata" element={<FilterList />} />
      <Route path="/grid" element={<SelectedGrid />} />
    </Routes>
    
    </BrowserRouter>
   
    

    </>
  )
}

export default App
