import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

function RegisterPage({setAuth}) {

  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  })

  const {first_name, last_name, email, password} = inputs;

  const onChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value})
  }

  const onSubmitForm = async(e) => {
    e.preventDefault()

    try {

      const body = {first_name, last_name, email, password}
      
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"}
        ,
        body: JSON.stringify(body)
      });

      const parseRes = await response.json()

      localStorage.setItem("token", parseRes.jwtToken)

      setAuth(true)


    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <h1>Register Page</h1>
      <form onSubmit={onSubmitForm}>
        <input type="text" name="first_name" placeholder="First Name" value={first_name} onChange={e => onChange(e)} />
        <input type="text" name="last_name" placeholder="Last Name" value={last_name} onChange={e => onChange(e)} />
        <input type="email" name="email" placeholder="email" value={email} onChange={e => onChange(e)} />
        <input type="password" name="password" placeholder="password" value={password} onChange={e => onChange(e)} />
        <button >Register</button>
      </form>
      <Link to="/login">Login</Link>
    </Fragment>
  )
}

export default RegisterPage
