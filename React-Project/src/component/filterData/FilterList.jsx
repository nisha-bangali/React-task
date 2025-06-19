import React, { useEffect, useState } from 'react'
import './filter.css'
import {items} from './Items'

export default function FilterList() {
    const filters = ['Bags','Watches','Sports','Sunglasses']
    const [filterData, setFilterData] = useState(items)
    const [activeFilter, setActiveFilter] = useState([])

    const handleFilterData = (e)=>{
      const catagery = e.target.id
     
      if(activeFilter.includes(catagery)){
        const filters = activeFilter.filter((el)=> el !== catagery)
        setActiveFilter(filters)
      }else{
        setActiveFilter([...activeFilter,catagery])
      }
    }
    const filterProducts =()=>{
      if(activeFilter.length){
        const tempItems = items.filter((item)=> activeFilter.includes(item.catagery))
        setFilterData(tempItems)
      }else{
        setFilterData(items)
      }
    }

    useEffect(()=>{
      filterProducts()
    },[activeFilter])

   
  return (
    <div className='App'>
      <div className="filters"
          onClick={handleFilterData}
      >
        {
            filters.map((item,idx)=>(
                <button
                className={activeFilter.includes(item) ? 'selected' : 'filter-btn'}
                 key={idx}
                 id={item}
                >{item}</button>
            ))
        }
      </div>
      <div className="product-list">
        {
          filterData.map((items,idx)=>(
            <div 
              className="item"
              key={idx}
            >
              <p>{items.name}</p>
              <p className='catagery'>{items.catagery}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
