import React, { Fragment, useState } from 'react';
import { Link } from "react-router-dom";

import "../components/Authentication/SignUp.css"

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
      <div className="base-container">
      <div className="header">Register</div>
      <div className="content">

      <div className="image">
          <img
            alt=""
            className="pic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkovC9a5Je29Pg-DaKoC5fPi8s2JAdD5wNqx1esDO7uEv4r9LFFAl1Xu-IZKZYBRMqBz4&usqp=CAU"
          />
        </div>
      <form onSubmit={onSubmitForm} className="form">
        <div className="form-group">
        <label htmlFor="username">First Name</label>
        <input type="text" name="first_name" placeholder="First Name" value={first_name} onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
        <label htmlFor="username">Last Name</label>
        <input type="text" name="last_name" placeholder="Last Name" value={last_name} onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="email" value={email} onChange={e => onChange(e)} />
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="password" value={password} onChange={e => onChange(e)} />
        </div>
        <button >Register</button>
      </form>
      <Link to="/login">Login</Link>
      </div>
      </div>
    </Fragment>
  )
}

export default RegisterPage
