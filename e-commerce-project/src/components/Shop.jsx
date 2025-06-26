import { Link } from 'react-router';
import StarRating from './Rating';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


function ProductCard({ Products }) {

  const discountprice = (Products?.price * (Products?.discountPercentage) / 100);
  const finalPrice = (Products?.price - discountprice).toFixed(2);

  const [checked, setChecked] = useState(false);

  const handleWishlist = (id) => {
    const wishlist = JSON.parse(localStorage.getItem('wishList')) || [];
    const isAlreadyInWishlist = wishlist.find((item) => item.id === id);

    if (!isAlreadyInWishlist) {
      const updatedWishlist = [...wishlist, Products];
      localStorage.setItem('wishList', JSON.stringify(updatedWishlist));
      setChecked(true);
      // setChecked(localStorage.getItem('likes'));
    } else {
      const updatedWishlist = wishlist.filter((item) => item.id !== id);
      localStorage.setItem('wishList', JSON.stringify(updatedWishlist));
      setChecked(false);
    }
    const likes = JSON.parse(localStorage.getItem('likes')) || {};
    likes[id] = !isAlreadyInWishlist;
    localStorage.setItem('likes', JSON.stringify(likes));
  };


  const handleAddToCard = (id) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

    const isAlreadyInCart = existingCart.find(item => item.id === id);

    if (!isAlreadyInCart) {
      const updatedCart = [...existingCart, Products];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    toast.success('🎉 Done! This product is now waiting in your cart.', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  };



  return (
    <div className="w-2xs rounded-2xl shadow-gray-700 overflow-hidden "
      style={{ boxShadow: '10px 10px 12px rgba(0, 0, 0, 0.05)' }}
      key={Products?.id}>
      <img className="w-full h-52 object-cover" src={Products?.images[0]} alt={Products?.title} />
      <div className="p-5">
        <Link to={`/products/${Products?.id}`} className="text-xl mb-2.5">
          {Products?.title}
        </Link>
        <p className='font-bold'>{Products?.brand}</p>
        <p className="font-bold text-blue-400 text-left">{Products?.category}</p>
        <p className="text-lg text-gray-500 mb-2 mt-2 h-10 overflow-hidden
         truncate ">{Products?.description}</p>

        <div className="flex gap-2 items-center">
          <span className='dicscountPerc'>{Products?.discountPercentage}%</span>
          <span className="font-normal text-lg text-gray-400"><s>${Products?.price}</s></span>
          <p className='font-bold text-lg text-gray-600'>${finalPrice}</p>
        </div>
        <div className='flex justify-between items-center'>
          <StarRating />
          <i className="fa-solid fa-heart fa-xl"
            onClick={() => handleWishlist(Products?.id)}
            style={{ color: checked ? "#FF0000" : '#9ca3b0' }}></i>
        </div>
        <div className='flex justify-center'>
          <button
            className="mt-2 pt-2 pr-4 pb-2 pl-4 bg-blue-400 text-white border-none rounded-2xl cursor-pointer"
            onClick={() => handleAddToCard(Products?.id)}
          >Add to Cart</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;


//  "#9ca3b0"