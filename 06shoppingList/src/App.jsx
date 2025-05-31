import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [food, setFood] = useState('')
  const [shoppingList, setShoppingList] = useState([])
  const [bucketList, setBucketList] = useState([])

  const handleChange = (e) => {
    setFood(e.target.value)
    // console.log(e.target.value);
  }

  const getItem = async () => {
    const url = `https://api.frontendeval.com/fake/food/${food}`
    const fetchApi = await fetch(url)
    const data = await fetchApi.json()
    // console.log(data);
    setShoppingList(data)
  }
  useEffect(() => {
    if (food.length >= 2) {
      getItem(food)
    }
  }, [food])

  const handleShoppingList = (e) => {
    console.log(e.target.getAttribute('data-id'));
    const idx = e.target.getAttribute('data-id')
    if (idx) {
      const obj = {
        id: Date.now(),
        data: shoppingList[idx],
        isDone: false
      }
      const copybucket = [...bucketList]
      copybucket.push(obj)
      setBucketList(copybucket)
    }
    setFood('')
  }

  const handleRightClick = (id)=>{
      const copyBucket = [...bucketList]
      const newBucketList = copyBucket.map((item) => {
        if(item.id == id){
          item.isDone = !item.isDone;
        }
        return item;
      })
      setBucketList(newBucketList)
  }
  const handleDelete = (id) =>{
      const copyBucket = [...bucketList]
      const newBucketList = copyBucket.filter((item) => item.id !== id)
      setBucketList(newBucketList)
  }
  return (
    <>
      <h1>Shopping List</h1>
      <div className="shopping-list">
        <div className="search-item">
          <input onChange={handleChange} value={food} />
        </div>
        {
          food.length >= 2 ? <div className="list-item" onClick={handleShoppingList}>
            {
              shoppingList.map((item, index) => {
                return <div
                  data-id={index}
                  className='product'> {item}</div>
              })
            }
          </div>: null
        }
        <div className="bucket">
          {
            bucketList.map((item) => {
              return <div className='bucket-row'>
                <button onClick={() => handleRightClick(item.id)}>✓</button>
                <div 
                className={item.isDone ? 'strike' : ''}
                >{item.data}</div>
                <button onClick={() => handleDelete(item.id)}>X</button>
              </div>
            })
          }

        </div>
      </div>
    </>
  )
}

export default App
