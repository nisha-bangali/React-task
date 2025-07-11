import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import StarRating from './Rating'

const WishList = () => {
    const [wishListItem, setWishListItem] = useState([])

    useEffect(() => {
        const getItem = localStorage.getItem('wishList')
        if (getItem) {
            setWishListItem(JSON.parse(getItem))
        }
    }, [])
    // console.log(cardItem);
    // // for (let i = 0; i < cardItem.length; i++) {
    // //     const discountprice = (cardItem[i]?.price * (cardItem[i]?.discountPercentage) / 100);
    // //     console.log(discountprice);
    // //     const finalPrice = (cardItem[i]?.price - discountprice).toFixed(2);
    // //     // console.log(finalPrice);

    // // }
    // // console.log(finalPrice);
    const handleRemove = (itemToRemove) => {
        const updatedCart = wishListItem.filter(item => item.id !== itemToRemove.id);
        setWishListItem(updatedCart);
        localStorage.setItem('wishList', JSON.stringify(updatedCart));
    };
    

return (
    <div>
        {
            // <h1>wish list</h1>
            !wishListItem.length ? (
                <p className='text-center text-2xl m-15'>No items in WishList...</p>
            ) : (
                // <h1>one item exist</h1>
                <div className='flex m-10 p-10'>
                    {
                        wishListItem.map((item) => (
                            <div className="w-2xs rounded-2xl shadow-gray-700 overflow-hidden "
                                style={{ boxShadow: '10px 10px 12px rgba(0, 0, 0, 0.05)' }}
                                key={item?.id}>
                                <img className="w-full h-52 object-cover" src={item?.images[0]} alt={item?.title} />
                                <div className="p-5">
                                    <Link to={`/products/${item?.id}`} className="text-xl mb-2.5">
                                        {item?.title}
                                    </Link>
                                    <p className='font-bold'>{item?.brand}</p>
                                    <p className="font-bold text-blue-400 text-left">{item?.category}</p>
                                    <p className="text-lg text-gray-500 mb-2 mt-2 h-10 overflow-hidden
                                         truncate ">{item?.description}</p>

                                    <div className="flex gap-2 items-center">
                                        <span className='dicscountPerc'>{item?.discountPercentage}%</span>
                                        <span className="font-normal text-lg text-gray-400"><s>${item?.price}</s></span>
                                        {/* <p className='font-bold text-lg text-gray-600'>${finalPrice}</p> */}
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <StarRating />
                                        <i className="fa-solid fa-heart fa-xl"
                                        // onClick={handleWishlist}
                                         onClick={() => handleRemove(item)}
                                        style={{ color: 'red' }}
                                        >

                                        </i>
                                    </div>
                                    <div className='flex justify-center'>
                                        <button
                                            className="mt-2 pt-2 pr-4 pb-2 pl-4 bg-blue-400 text-white border-none rounded-2xl cursor-pointer"
                                           
                                        >Remove to Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )
        }
    </div>
)
}

export default WishList
