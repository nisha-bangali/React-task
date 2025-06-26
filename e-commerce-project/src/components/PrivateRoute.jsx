import React from 'react'
import { Navigate, Outlet } from 'react-router'

function PrivateRouter() {
   const auth = JSON.parse(localStorage.getItem("auth"))
  
  return (
    <>
      {auth ? <Outlet />: <Navigate to={'/signin'} />
        }
    </>
  )
}

export default PrivateRouter


{/* <Navigate to="/login" /> */}