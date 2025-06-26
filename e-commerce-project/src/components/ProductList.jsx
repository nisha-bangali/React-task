import { useEffect, useState } from 'react'
import ProductCard from './Shop'
import ProductSimmerEffect from './ProductSimmerEffect'

function ProductList() {
  const [data, setData] = useState([]) // original data
  const [filteredData, setFilteredData] = useState([]) // displayed data
  const [activeFilter, setActiveFilter] = useState([])
  const [searchData, setSearchData] = useState('')

  const filters = ['beauty', 'fragrances', 'furniture', 'groceries']

  // Fetch data on load
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://dummyjson.com/products')
      const result = await res.json()
      setData(result.products)
      setFilteredData(result.products)
    }
    fetchData()
  }, [])

  // Handle filter toggles
  const handleFilterData = (e) => {
    const category = e.target.id
    if (activeFilter.includes(category)) {
      setActiveFilter(activeFilter.filter((el) => el !== category))
    } else {
      setActiveFilter([...activeFilter, category])
    }
  }

  // Update filteredData when activeFilter changes
  useEffect(() => {
    if (activeFilter.length > 0) {
      setFilteredData(data.filter((item) => activeFilter.includes(item.category)))
    } else {
      setFilteredData(data)
    }
  }, [activeFilter, data])

  // Final filtered and searched data
  const finalData = filteredData.filter((product) =>
    product.category.toLowerCase().includes(searchData.toLowerCase()) ||
    product.title.toLowerCase().includes(searchData.toLowerCase())
  )
  
  return (
    <>
      <div className='flex justify-around items-center my-10 flex-wrap'>
        <div onClick={handleFilterData}>
          {filters.map((item, idx) => (
            <button
              className={`px-4 py-2 mt-[50px] ml-[10px] rounded-lg text-[20px] 
                ${activeFilter.includes(item) ? 'bg-black text-white' : 'bg-gray-300'}`}
              key={idx}
              id={item}
            >
              {item}
            </button>
          ))}
        </div>

        <input
          type="text"
          name="search-product"
          id="search-product"
          className='w-60 h-10 m-5 border px-2'
          placeholder='Search product...'
          onChange={(e) => setSearchData(e.target.value)}
        />
      </div>
      {
        !finalData.length ? <ProductSimmerEffect /> :

          <div className="flex justify-center items-center gap-5 flex-wrap">
            {
              finalData.length > 0 ? (
                finalData.map((product, index) => (
                  <ProductCard key={index} Products={product} />
                ))
              ) : (
                <p>Product not found.</p>
              )
            }
          </div>
      }
    </>
  )
}

export default ProductList
