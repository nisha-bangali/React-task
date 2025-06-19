
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Productdetail from './components/ProductDetail'
import Contact from './components/Contact'


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList />} />
         <Route path='/Products/:id' element={<Productdetail />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
