
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
