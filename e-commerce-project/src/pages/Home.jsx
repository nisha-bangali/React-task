import React, { useEffect, useState } from 'react';
import { data, Link } from 'react-router';
import StarRating from '../components/Rating';
import ProductSimmerEffect from '../components/ProductSimmerEffect';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation,Pagination ,Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Home = () => {
  const [product, setProduct] = useState([])
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
    // <div className=" ">
    //   {/* Hero Section */}
    //   <Swiper navigation={true} pagination={true} autoplay={true} modules={[Navigation,Pagination,Autoplay]}> 
    //     <SwiperSlide>
    //       <section className="bg-gray-100 dark:bg-gray-800 dark:text-white  px-4 text-left flex justify-center items-center gap-5">
    //         <div>
    //           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
    //             Welcome to MyShop
    //           </h1>
    //           <p className="text-lg md:text-xl text-gray-600 mb-6">
    //             Discover the best deals on the latest products
    //           </p>
    //           <Link
    //             to="/products"
    //             className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
    //           >
    //             Shop Now
    //           </Link>
    //         </div>
    //         <div>
    //           <img src="https://www.pagetraffic.in/wp-content/uploads/2022/04/ecommerce-seo-packages.png" className='w-xl mt-10'
    //           />
    //           {/* <img src="https://png.pngtree.com/png-clipart/20240324/original/pngtree-shopping-website-product-png-image_14668904.png" className='w-xl'
    //           /> */}
    //         </div>
    //       </section>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <section className="bg-gray-100 dark:bg-gray-800 dark:text-white  px-10 py-15 text-left flex justify-center items-center gap-16">
    //         <div>
    //           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
    //             Get up to 30% Off <br /> New Arrivals
    //           </h1>
    //           <p className="text-lg md:text-xl text-gray-600 mb-6">
    //             Discover the best deals on the latest products
    //           </p>
    //           <Link
    //             to="/products"
    //             className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
    //           >
    //             Shop Now
    //           </Link>
    //         </div>
    //         <div>
    //           <img src="https://png.pngtree.com/png-clipart/20220424/original/pngtree-e-commerce-shopping-business-icon-png-image_7555011.png" className='w-sm'
    //           />
    //         </div>
    //       </section>
    //     </SwiperSlide>
    //      <SwiperSlide>
    //       <section className="bg-gray-100 dark:bg-gray-800 dark:text-white  px-4 text-left flex justify-center items-center gap-5">
    //         <div>
    //           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
    //            Make Your Skin pop <br />with GET-GLOW
    //           </h1>
    //           <p className="text-lg md:text-xl text-gray-600 mb-6">
    //             Discover the best deals on the latest products
    //           </p>
    //           <Link
    //             to="/products"
    //             className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
    //           >
    //             Shop Now
    //           </Link>
    //         </div>
    //         <div>
    //           <img src="https://png.pngtree.com/png-vector/20240603/ourmid/pngtree-cosmetics-beauty-makeup-skin-care-products-png-image_12616485.png" className='w-lg'
    //           />
    //         </div>
    //       </section>
    //     </SwiperSlide>
    //      <SwiperSlide>
    //       <section className="bg-gray-100 dark:bg-gray-800 dark:text-white  px-4 text-left flex justify-center items-center gap-5">
    //         <div>
    //           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
    //             New Collections
    //           </h1>
    //           <p className="text-lg md:text-xl text-gray-600 mb-6">
    //             Discover the best deals on the latest products
    //           </p>
    //           <Link
    //             to="/products"
    //             className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
    //           >
    //             Shop Now
    //           </Link>
    //         </div>
    //         <div>
    //           <img src="https://www.pngplay.com/wp-content/uploads/7/Online-Shopping-Bag-Background-PNG-Image.png" className='w-lg'
    //           />
    //         </div>
    //       </section>
    //     </SwiperSlide>
    //   </Swiper>

    //   {/* <section className="bg-gray-100 dark:bg-gray-800 dark:text-white  px-4 text-left flex justify-center items-center">
    //     <div>
    //       <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
    //         Welcome to MyShop
    //       </h1>
    //       <p className="text-lg md:text-xl text-gray-600 mb-6">
    //         Discover the best deals on the latest products
    //       </p>
    //       <Link
    //         to="/products"
    //         className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
    //       >
    //         Shop Now
    //       </Link>
    //     </div>
    //     <div>
    //       <img src="https://png.pngtree.com/png-clipart/20240324/original/pngtree-shopping-website-product-png-image_14668904.png" className='w-xl'
    //       />
    //     </div>
    //   </section> */}

    //   {/* Featured Products Section */}
    //   <h2 className='text-4xl text-center p-6 font-bold'>Our Collection</h2>
    //   {/* <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"> */}

    //   <div className='flex flex-wrap m-10 gap-5'>
    //     {!product.length ? <ProductSimmerEffect /> :
    //       product.map((product, index) => (
    //         <div className="w-2xs rounded-2xl shadow-gray-700 overflow-hidden "
    //           style={{ boxShadow: '10px 10px 12px rgba(0, 0, 0, 0.05)' }}
    //           key={index}>
    //           <img className="w-full h-52 object-cover" src={product?.image} alt={product?.category} />
    //           <div className="p-5">
    //             <Link to={`/product/${product?.id}`} className="text-xl mb-2.5">
    //               {product?.title}
    //             </Link>
    //             <p className='font-bold'>{product?.brand}</p>
    //             <p className="font-bold text-blue-400 text-left">{product?.category}</p>
    //             {/* <p className="text-lg text-gray-500 mb-2 mt-2 h-10 overflow-hidden
    //                 truncate ">{product?.description}</p> */}

    //             <div className="flex gap-2 items-center">
    //               <p className='font-bold text-lg text-gray-600'>${product?.price}</p>
    //             </div>
    //             <div className='flex justify-between items-center'>
    //               <StarRating />
    //               <i
    //                 className="fa-solid fa-heart fa-xl"
    //                 onClick={(e) => handleWishlist(e, product.id)}
    //                 style={{ color: wishlist.includes(product.id) ? "#FF0000" : "#9ca3b0" }}
    //               ></i>
    //             </div>
    //             <div className='flex justify-left'>
    //               <button
    //                 className="mt-2 pt-2 pr-4 pb-2 pl-4 bg-blue-400 text-white border-none rounded-2xl cursor-pointer"
    //                 onClick={() => handleAddToCard(product?.id)}
    //               >Add to Cart</button>
    //             </div>
    //           </div>
    //         </div>
    //       ))
    //     }
    //   </div>
    //   {/* </section> */}

    // </div>
     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-500">
      {/* Hero Section */}
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        className="h-[60vh] md:h-[70vh] lg:h-[80vh]" // Adjust height for better visual
      >
        <SwiperSlide>
          <section className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-800 dark:to-indigo-900 px-4 py-10 md:px-10 flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left animate-fade-in">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight animate-slide-in-left">
                Welcome to <span className="text-yellow-300 drop-shadow-lg">MyShop</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 animate-fade-in-up delay-200">
                Discover the best deals on the latest products, just for you.
              </p>
              <Link
                to="/products"
                className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 transform hover:scale-105 transition-all duration-300 ease-in-out animate-pop-in delay-400"
              >
                Shop Now
              </Link>
            </div>
            <div className="mt-8 md:mt-0 flex-shrink-0 animate-scale-in delay-600">
              <img
                src="https://www.pagetraffic.in/wp-content/uploads/2022/04/ecommerce-seo-packages.png"
                className="w-full max-w-md mx-auto object-contain shadow-2xl rounded-lg"
                alt="E-commerce banner"
              />
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="h-full bg-gradient-to-r from-green-500 to-teal-600 dark:from-green-800 dark:to-teal-900 px-4 py-10 md:px-10 flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left animate-fade-in">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight animate-slide-in-left">
                Get up to <span className="text-yellow-300 drop-shadow-lg">30% Off</span> <br /> New Arrivals!
              </h1>
              <p className="text-lg md:text-xl text-green-100 mb-8 animate-fade-in-up delay-200">
                Don't miss out on incredible savings on the freshest items.
              </p>
              <Link
                to="/products"
                className="inline-block bg-white text-green-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-100 transform hover:scale-105 transition-all duration-300 ease-in-out animate-pop-in delay-400"
              >
                Explore Deals
              </Link>
            </div>
            <div className="mt-8 md:mt-0 flex-shrink-0 animate-scale-in delay-600">
              <img
                src="https://png.pngtree.com/png-clipart/20220424/original/pngtree-e-commerce-shopping-business-icon-png-image_7555011.png"
                className="w-full max-w-sm mx-auto object-contain shadow-2xl rounded-lg"
                alt="Discount banner"
              />
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="h-full bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-800 dark:to-purple-900 px-4 py-10 md:px-10 flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left animate-fade-in">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight animate-slide-in-left">
                Make Your Skin Pop <br />with <span className="text-yellow-300 drop-shadow-lg">GET-GLOW</span>
              </h1>
              <p className="text-lg md:text-xl text-pink-100 mb-8 animate-fade-in-up delay-200">
                Discover premium skincare and cosmetics for a radiant look.
              </p>
              <Link
                to="/products"
                className="inline-block bg-white text-pink-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-100 transform hover:scale-105 transition-all duration-300 ease-in-out animate-pop-in delay-400"
              >
                Shop Skincare
              </Link>
            </div>
            <div className="mt-8 md:mt-0 flex-shrink-0 animate-scale-in delay-600">
              <img
                src="https://png.pngtree.com/png-vector/20240603/ourmid/pngtree-cosmetics-beauty-makeup-skin-care-products-png-image_12616485.png"
                className="w-full max-w-lg mx-auto object-contain shadow-2xl rounded-lg"
                alt="Skincare products"
              />
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="h-full bg-gradient-to-r from-purple-500 to-red-600 dark:from-purple-800 dark:to-red-900 px-4 py-10 md:px-10 flex flex-col md:flex-row justify-center items-center gap-8 text-center md:text-left animate-fade-in">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight animate-slide-in-left">
                Discover Our <br /> <span className="text-yellow-300 drop-shadow-lg">New Collections</span>
              </h1>
              <p className="text-lg md:text-xl text-purple-100 mb-8 animate-fade-in-up delay-200">
                Fresh arrivals and exclusive designs waiting for you.
              </p>
              <Link
                to="/products"
                className="inline-block bg-white text-purple-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-100 transform hover:scale-105 transition-all duration-300 ease-in-out animate-pop-in delay-400"
              >
                View Collections
              </Link>
            </div>
            <div className="mt-8 md:mt-0 flex-shrink-0 animate-scale-in delay-600">
              <img
                src="https://www.pngplay.com/wp-content/uploads/7/Online-Shopping-Bag-Background-PNG-Image.png"
                className="w-full max-w-lg mx-auto object-contain shadow-2xl rounded-lg"
                alt="Shopping bag"
              />
            </div>
          </section>
        </SwiperSlide>
      </Swiper>

      {/* Featured Products Section */}
      <h2 className="text-4xl md:text-5xl font-bold text-center py-10 mt-8 mb-6 relative z-10 before:absolute before:content-[''] before:w-20 before:h-1 before:bg-blue-500 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:rounded-full animate-fade-in-up">
        Our Collection
      </h2>

      <div className="flex flex-wrap justify-center gap-8 p-6 md:p-10 w-full">
        {!product.length ? (
          <ProductSimmerEffect />
        ) : (
          product.map((product, index) => (
            <div
              className="relative w-full sm:w-64 md:w-72 lg:w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
              key={index}
            >
              <Link to={`/product/${product?.id}`} className="block">
                <img
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  src={product?.image}
                  alt={product?.category}
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2.5 text-gray-900 dark:text-white truncate">
                    {product?.title}
                  </h3>
                  <p className="font-bold text-gray-700 dark:text-gray-300 mb-1">{product?.brand}</p>
                  <p className="font-bold text-blue-500 dark:text-blue-400 text-sm mb-3">
                    {product?.category}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <p className="font-extrabold text-2xl text-gray-800 dark:text-white">${product?.price}</p>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <StarRating /> {/* Assuming a default or fetched rating */}
                    </div>
                  </div>
                </div>
              </Link>
              <div className="absolute top-4 right-4 z-10">
                <i
                  className={`fa-solid fa-heart fa-xl cursor-pointer transition-colors duration-200 ${
                    wishlist.includes(product.id) ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
                  }`}
                  onClick={(e) => handleWishlist(e, product.id)}
                ></i>
              </div>
              <div className="p-5 pt-0 flex justify-center">
                <button
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                  onClick={() => handleAddToCard(product?.id)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home
