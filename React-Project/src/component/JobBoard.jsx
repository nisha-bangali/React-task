import React, { useEffect, useState } from 'react'
import '../css/jobboard.css'

export default function JobBoard() {
  const [postId, setPostId] = useState([])
  const [postMetaData, setPostMetaData] = useState([])
  const getData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data
    } catch (err) {
      console.error("Error:", err);
    }
  }

  const getJobTitle = (text) => {
     if (!text) return 'N/A';
    const arr = text.split(/\((YC [^)]+)\)/)
    if (arr.length > 1) {
      const post1 = arr[0]
      const post2 = arr[1]
      // console.log(post1 , post2);
      
      return `${post1} ${post2}`
    }
    return text;
  }
 
  const getJobInfo = (text) => {
    if (!text) return 'N/A';
    const info = text.split(/\((YC [^)]+)\)/)
    if (info.length > 2) {
      return info[2]
    }
    return text;
  }
  const getDate = (time) => {
    const date = new Date(time * 1000)
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const year = date.getFullYear()
    const formatDate = `${month}/${day}/${year}`
    return formatDate
  }
  const fetchPostMetaData = async (ids) => {
    const apiCall = ids.map((id) => {
      const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      return getData(url)
    })

    const result = await Promise.all(apiCall)
    if (result.length) {
      const newArr = result.map((item) => {
        const obj = {
          jobTitle: getJobTitle(item.title),
          jobInfo: getJobInfo(item.title),
          date: getDate(item.time),
          url: item.url ? item.url : `https://news.ycombinator.com/item?id=${item.id}`
        }
        return obj;
      })
      // console.log(newArr);
      
      let copyMetaData = [...postMetaData]
      copyMetaData = [...copyMetaData, ...newArr]
      setPostMetaData(copyMetaData)
    }
  }
  const fetchPostId = async () => {
    const url = `https://hacker-news.firebaseio.com/v0/jobstories.json`;
    const data = await getData(url);
    const post = data.splice(0, 9);
    // console.log(data);
    setPostId(data);
    fetchPostMetaData(post)
  }
  useEffect(() => {
    fetchPostId()
  }, [])

  const handleLoadMore =()=>{
   const copyPostId = [...postId]
   if(copyPostId.length >0 ){
    const ids = copyPostId.splice(0,6);
    fetchPostMetaData(ids)
    setPostId(copyPostId);
   }

  }

  return (
    <div>
      <h1>Job Board</h1>
      <div className="job-container">
        {
          postMetaData?.length === 0 ?
            <div className='loading'>
              Loading....
            </div>
            : postMetaData.map((item) => (
              <a
                className="job-card"
                href={item.url}
                target='_blank'
              >
                <div className="job-title">
                  {item.jobTitle}
                </div>
                <div className="job-info">
                  {item.jobInfo}
                </div>
                <div className="job-date">
                  {item.date}
                </div>
              </a>
            ))
        }

      </div>
      <button
       className='load-more'
       onClick={handleLoadMore}
       >Load More</button>
    </div>
  )
}
