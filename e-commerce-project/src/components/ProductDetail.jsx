import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import StarRating from "./Rating"


function Productdetail() {
    const [productDetail, setProductDetail] = useState()
    const { id } = useParams()

   useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then((product) => {
        setProductDetail(product)
    }).catch((err) => console.log(err))
   },[id])
   console.log(productDetail,"product.....");
   

   const discountprice = (productDetail?.price * (productDetail?.discountPercentage) / 100)   
  const finalPrice = (productDetail?.price - discountprice).toFixed(2)

    return (
        <>
            
            <div className="flex gap-8 h-full mt-12 mb-12 mr-52 ml-52 p-7 shadow-gray-800 " style={{ boxShadow: '5px 5px 15px rgb(202, 202, 202)' }}>
                <div className="image">
                    <img src={productDetail?.images[0]} alt="Beauty Product" className="w-md h-96" />
                </div>
                <div className="leading-loose mt-5">
                    <h3 className="text-3xl font-bold">{productDetail?.title}</h3>
                    <p className="brand">{productDetail?.brand}</p>
                    <StarRating />
                    <p className='dicscountPerc'><strong>Discount: </strong>{productDetail?.discountPercentage}% </p>
                    <p>
                        <span className="product-price"><s>${productDetail?.price} </s></span>
                        <span className='product-discountprice'>${finalPrice} Only</span>
                    </p>
                    <p><b>{productDetail?.stock}</b> Stocks available</p>
                    <p><b>Delivery:</b> {productDetail?.shippingInformation}</p>
                    <p><b>Note: </b>{productDetail?.returnPolicy}</p>
                    <button className='pt-2.5 pb-2.5 pr-5 pl-5 rounded-xl text-white'><Link to="/products" >Back</Link></button>
                </div>
            </div>


        </>
    )

}

export default Productdetail
