import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import  axios from 'axios';

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <div className="login-form">
      <Link to="/SignIn"></Link>
      <h1>Login</h1>
      <label className="Email">Email address:
      <input 
        type="text" 
        placeholder="email..."
        onChange = {(e) => {
          setEmail(e.target.value)
        }}
      />
      </label>
      <label className="Password">Password:
      <input 
        type="password" 
        placeholder="password..." 
        onChange = {(e) => {
        setPassword(e.target.value)
        }}
      />
      </label>
      <button className="btn btn-outline-primary" onClick={login}>Login</button>
    </div>
  )
}

export default SignIn;