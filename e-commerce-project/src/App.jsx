
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import Productdetail from './components/ProductDetail'
import Contact from './components/Contact'
import Login from './components/Login'
import Signin from './components/SignIn'
import Service from './components/Service'
import AddToCard from './components/AddToCard'
import WishList from './components/WishList'
import PrivateRouter from './components/PrivateRoute'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route element={<PrivateRouter />}>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/products" element={<ProductList />} />
            <Route path='/Products/:id' element={<Productdetail />} />
            <Route path='/card' element={<AddToCard />} />
            <Route path='/wishlist' element={<WishList />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
