import React,{useState} from 'react'


//import jwt from 'jsonwebtoken'
function Logout() {
  localStorage.removeItem('token')
  return (
      <div>
        <h1>LOGGED OUT </h1>
      </div>
  )
}

export default Logout;