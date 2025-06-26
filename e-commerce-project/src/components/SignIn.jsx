import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';


// import "tailwindcss";

function Signin() {
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')

  // const [isAuth , setIsAuth] = useState(false)

 const [form,setForm] = useState({
  name:'',
  address:'',
  email:'',
  password:'',
  confirmPassword:'',

 })


  const navigate = useNavigate()

function handleChange(e){
  setForm({
    ...form,
    [e.target.name] : e.target.value
  })
}

 
const handleSubmit = (e) =>{
  e.preventDefault()
//   if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match!");
//     }
// console.log(nameemail);

if (form.name === '' || form.email === '' || form.password === '' || form.confirmPassword === '') {
      toast.error('Please fill all the fields',{
          position: "top-center",
      })
    }
    else if (form.email.includes('@') === false || form.email.includes('.') === false) {
       toast.error('Invalid email Please include "@" & "."in your Email',{
          position: "top-center",
      })
    }
    else if (form.password !== form.confirmPassword) {
       toast.error('Passwords do not match',{
          position: "top-center",
      })}
    else if(form.password.length === 8){
       toast.warning('Password should be at least 8 characters long',{
          position: "top-center",
      })
    }
   else{
       
        toast.success('🦄 Signup Successful', {
            position: "top-center",
        //     autoClose: 3000,
        //     hideProgressBar: false,
        //     closeOnClick: false,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",

          });
        // alert('SignIn successfully')
        localStorage.setItem("userdata", JSON.stringify(form));
        navigate("/login");
    }

    
}
//   const handleSignin = (e) =>{
//     e.preventDefault(); 
//     if (name === '' || email === '' || password === '' || confirmPassword === '') {
//       alert('Please fill all the fields')
//     }
//     else if (email.includes('@') === false || email.includes('.') === false) {
//       alert('Invalid email Please include "@" & "."in your Email')
//     }
//     else if (password !== confirmPassword) {
//       alert('Passwords do not match')
//     }
//     else if(password.length === 8){
//       alert('Password should be at least 8 characters long')
//     }
//     else if (email.includes('@') === false || email.includes('.') === false) {
//       alert('Invalid email Please include "@" & "."in your Email')
    // }


  return (

   <div className="max-w-md mx-auto mt-10 mb-10 p-8 bg-white rounded-lg shadow-lg" style={{boxShadow:'0px 0px 5px gray'}}>
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h2>

  <form className="space-y-5" onSubmit={handleSubmit}>
    
    {/* Name */}
    <div>
      <label className="block text-lg font-medium text-gray-700 mb-1">Name</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block text-lg font-medium text-gray-700 mb-1">Email</label>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Password */}
    <div>
      <label className="block text-lg font-medium text-gray-700 mb-1">Password</label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Confirm Password */}
    <div>
      <label className="block text-lg font-medium text-gray-700 mb-1">Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full text-xl bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
    >
      Sign Up
    </button>
      <ToastContainer />
  </form>

</div>

  );
};


export default Signin










  // const handleSignin = (e) =>{
  //   e.preventDefault(); 
  //   if (name === '' || email === '' || password === '' || confirmPassword === '') {
  //     alert('Please fill all the fields')
  //   }
    // else if (email.includes('@') === false || email.includes('.') === false) {
    //   alert('Invalid email Please include "@" & "."in your Email')
    // }
    // else if (password !== confirmPassword) {
    //   alert('Passwords do not match')
    // }
    // else if(password.length === 8){
    //   alert('Password should be at least 8 characters long')
    // }
    // else if (email.includes('@') === false || email.includes('.') === false) {
    //   alert('Invalid email Please include "@" & "."in your Email')
    // }

    // else if (password !== confirmPassword) {
    //   alert('Passwords do not match')
    // } else if (password.length < 8) {
    //   alert('Password should be at least 8 characters long')
    // } else if (password.length > 8) {
    //   alert('Password should not be more than 8 characters long')
    // }
    // else if (password.includes('@', '#', '*', '_') === false) {
    //   alert('Password should include at least one special character( @ # * _)')
//     }

  // }