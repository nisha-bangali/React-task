import React, { useEffect, useState } from 'react'

export default function InfiniteScrolling() {

  //https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=9
  const [images, setImages] = useState([])

  const fetchImages = async (index) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=9`)
      const data = await response.json()
      return data
      // console.log(data);
      
    } catch (err) {
      console.log(err)
    }
  }
  const fetchFirstPage =async () =>{
     const data = await fetchImages(1)
    setImages(data)
  }
  useEffect(()=>{
   fetchFirstPage()
  },[])
  console.log(images);
  
  return (
    <div>
      <h1>Infinite Scrolling</h1>
    {
      images?.map((image,index)=>(
        <img key={index} src={image?.thumbnailUrl} alt={image?.title} />
      ))
    }

    </div>
  )
}
