import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const data =[
    {
      id: "name",
      inputType: "text",
      buttonName: "Next",
      Placeholder: "Your Name...",
      lableName: "Name",
    },
    {
      id: "email",
      inputType: "email",
      buttonName: "Next",
      Placeholder: "Your Email...",
      lableName: "Email",
    },
    {
      id: "dob",
      inputType: "date",
      buttonName: "Next",
      Placeholder: "",
      lableName: "DOB",
    },
    {
      id: "password",
      inputType: "password",
      buttonName: "Submit",
      Placeholder: "",
      lableName: "Password",
    },
  ]

   const [formData, setFormData] = useState(data)
   const [index,setIndex] = useState(0)
   const [userData,setUseData] = useState({
    name:'',
    email:'',
    dob:'',
    password:''
   })
   const [isFormSubmited, setIsFormSubmited] = useState(false)
   
   const handleSubmit = (e) =>{
     e.preventDefault()
    if(index === formData.length - 1){
      console.log("form is submited");
      setIsFormSubmited(true)
    }else{
      setIndex((idx) => idx+1)
    }

   }

   const handleInputChange = (e) =>{
    const id = e.target.id
    const val = e.target.value
    const copyForm = {...userData}
    copyForm[id] = val
    setUseData(copyForm)
    
   }
   
  
   const hamdleBack = (e) => {
     e.preventDefault()
     setIndex((idx)=> idx -1)
   }


  return (
    <>
     <div className="App">
      { !isFormSubmited ? <form className='form-container' key={index} onSubmit={handleSubmit} >
        {
          index > 0 && <a href="/" onClick={hamdleBack}>Back</a>
        }
        <label>{formData[index].lableName}</label>
        <input 
          type={formData[index].inputType} 
          placeholder={formData[index].Placeholder} 
          id={formData[index].id} 
          onChange={handleInputChange}
          required
        />
        <button>{formData[index].buttonName} </button>
      </form>:
      <div className='usedata'>
        <h2>User Data</h2>
        <span>Name: {userData.name}</span><br />
        <span>Email: {userData.email}</span><br />
        <span>DOB: {userData.dob}</span><br />
        <span>Password: {userData.password}</span><br />
      </div>
      }
     </div>

    </>
  )
}

export default App
