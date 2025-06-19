import { Link } from 'react-router';
import StarRating from './Rating';
import { useState } from 'react';


function ProductCard({ Products }) {
  const [checked, setChecked] = useState(false)

  const discountprice = (Products?.price * (Products?.discountPercentage) / 100);
  const finalPrice = (Products?.price - discountprice).toFixed(2);

  const handleWishlist = () =>{
    setChecked(!checked)
  }
  

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
            onClick={handleWishlist}
          style={{ color: checked ? "#FF0000" :'#9ca3b0'  }}></i>
        </div>
        <div className='flex justify-center'>
          <button className="mt-2 pt-2 pr-4 pb-2 pl-4 bg-blue-400 text-white border-none rounded-2xl cursor-pointer">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;


//  "#9ca3b0"