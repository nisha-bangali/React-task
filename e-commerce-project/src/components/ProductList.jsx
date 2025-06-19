
import { useEffect, useId, useState } from 'react'
import ProductCard from './Shop'



function ProductList() {
  const [data, setData] = useState([])

  useEffect(() => {
  async function fetchData(){
  const data =  await fetch('https://dummyjson.com/products')
    const product = await data.json()
    setData(product.products)
      }
      fetchData()
    }, [])
    
    // console.log(data);
  
  const [searchData, setsearchData] = useState('')
  const filterData = data.filter((product) => {
    return (product.category.toLowerCase().includes(searchData) ||
      product.title.toLowerCase().includes(searchData)
    )
  })
  

  return (
    <>
      <div className='flex justify-center items-center '>
        <input type="text" name="search-product" id="search-product"
          className='w-60 h-10 m-5 border'
          placeholder='search product....'
          onChange={(e) => setsearchData(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center gap-5 flex-wrap">
        {
          filterData.length > 0 ? (
            filterData.map((Value, index) => {
              return (
             <ProductCard  key={index} Products ={Value} />
              
              )
            })
          ) : (
            <p>Product is not found</p>
           
          )
        }
      </div>
    </>
  )

}


export default ProductList
