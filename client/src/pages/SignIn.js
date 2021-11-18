import React from 'react'
import { Link } from 'react-router-dom'

 const SignIn = () => {
  return (
    <div style={{display: 'flex',justifyContent:'center',alignItems: 'center', height: '90vh'}}>
      <h1>SignIn</h1>
      <Link to="/SignIn"></Link>
    </div>
  )
}

export default SignIn
