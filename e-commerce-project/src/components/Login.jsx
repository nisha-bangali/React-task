import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const data = JSON.parse(localStorage.getItem("userdata"))

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data?.email === email && data?.password === password) {
      
      toast.success('🦄 Login Successfull', {
        position: "top-center",
        autoClose: 2993,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        // transition: Bounce,
      });
      navigate("/products")
      localStorage.setItem("auth", JSON.stringify(true))
      // setAuth(true)
    } else {
      alert("user not valid")
      navigate("/signin")

    }
  }

  return (


    <div className="max-w-md mx-auto mt-10 mb-10 p-10 bg-white rounded-lg shadow-lg " style={{ boxShadow: '0px 0px 5px gray', height: '500px' }}>
      <form action="#" onSubmit={handleSubmit} className="space-y-6">
        <h3 className="text-3xl font-bold text-center text-gray-800">Log in</h3>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="password" className="text-lg font-medium text-gray-700">
              Password
            </label>
            <Link to="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-xl w-full bg-blue-600 text-white py-2 my-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Log In
        </button>
        <ToastContainer />

        {/* Signup Prompt */}
        <p className="text-center text-md text-gray-600">
          Don't have an account?{' '}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>

  )
}

export default Login
