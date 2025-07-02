
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './layouts/Header'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './components/Shop'
import Footer from './layouts/Footer'
import ProductList from './pages/ProductList'
import Productdetail from './components/ProductDetail'
import Contact from './pages/Contact'
import Login from './auth/Login'
import Signin from './auth/SignIn'
import Service from './pages/Service'
import AddToCard from './components/AddToCard'
import WishList from './components/WishList'
import PrivateRouter from './auth/PrivateRoute'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          {/* <Route element={<PrivateRouter />}> */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/products" element={<ProductList />} />
            <Route path='/Products/:id' element={<Productdetail />} />
            <Route path='/card' element={<AddToCard />} />
            <Route path='/wishlist' element={<WishList />} />
          {/* </Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
