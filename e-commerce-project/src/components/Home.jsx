import React, { useEffect, useState } from 'react';
import { data, Link } from 'react-router';
import StarRating from './Rating';
import ProductSimmerEffect from './ProductSimmerEffect';

const Home = () => {
  const [product, setProduct] = useState([])
  const [checked, setChecked] = useState(false)
  const [wishlist, setWishlist] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://fakestoreapi.com/products')
      const product = await data.json()
      setProduct(product)
    }
    fetchData()
  }, [])

  const handleWishlist = (e, productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId)
        : [...prevWishlist, productId]
    );
  };

 
  return (
    <div className=" ">
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-800 dark:text-white  px-4 text-left flex justify-center items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to MyShop
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Discover the best deals on the latest products
          </p>
          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Shop Now
          </Link>
        </div>
        <div>
          <img src="https://png.pngtree.com/png-clipart/20240324/original/pngtree-shopping-website-product-png-image_14668904.png" className='w-xl'
          />
        </div>
      </section>

      {/* Featured Products Section */}
      <h2 className='text-4xl text-center p-6 font-bold'>Our Collection</h2>
      {/* <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"> */}

       <div className='flex flex-wrap m-10 gap-5'>
         {!product.length ? <ProductSimmerEffect /> :
          product.map((product, index) => (
            <div className="w-2xs rounded-2xl shadow-gray-700 overflow-hidden "
              style={{ boxShadow: '10px 10px 12px rgba(0, 0, 0, 0.05)' }}
              key={index}>
              <img className="w-full h-52 object-cover" src={product?.image} alt={product?.category} />
              <div className="p-5">
                <Link to={`/product/${product?.id}`} className="text-xl mb-2.5">
                  {product?.title}
                </Link>
                <p className='font-bold'>{product?.brand}</p>
                <p className="font-bold text-blue-400 text-left">{product?.category}</p>
                <p className="text-lg text-gray-500 mb-2 mt-2 h-10 overflow-hidden
                    truncate ">{product?.description}</p>

                <div className="flex gap-2 items-center">
                  <p className='font-bold text-lg text-gray-600'>${product?.price}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <StarRating />
                  <i
                    className="fa-solid fa-heart fa-xl"
                    onClick={(e) => handleWishlist(e, product.id)}
                    style={{ color: wishlist.includes(product.id) ? "#FF0000" : "#9ca3b0" }}
                  ></i>
                </div>
                <div className='flex justify-center'>
                  <button 
                   className="mt-2 pt-2 pr-4 pb-2 pl-4 bg-blue-400 text-white border-none rounded-2xl cursor-pointer"
                   onClick={()=>handleAddToCard(product?.id)}
                   >Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        }
    </div>
      {/* </section> */}

    </div>

  );
};

export default Home
