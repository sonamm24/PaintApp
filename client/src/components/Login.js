import React, { useState } from 'react'
import  axios from 'axios';

function Login() {

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
    <div>
      <h1>Login</h1>
      <input 
        type="text" 
        placeholder="email..."
        onChange = {(e) => {
          setEmail(e.target.value)
        }}
      />
      <input 
        type="password" 
        placeholder="password..." 
        onChange = {(e) => {
        setPassword(e.target.value)
        }}
      />
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
