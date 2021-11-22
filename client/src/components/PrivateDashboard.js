import React, {Fragment, useState, useEffect} from 'react';
import {Link} from "react-router-dom";


function PrivateDashboard({setAuth}) {

  const [name, setName] = useState("")

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: {token: localStorage.token}
      });


      const parseRes = await response.json();

      console.log(parseRes)

      setName(parseRes.first_name)


    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getName()
  }, [])

  const logout = e => {
    e.preventDefault();
 
     localStorage.removeItem("token");
 
     setAuth(false);
   }

  return (
    <Fragment className="fragment">
 
      <div className="nav-bar">
        <div className="left-side">
        <Link to="/">
        <img className= "img-logo" src={require('../images/cover.png')} ></img>
        </Link>
        </div>
        <div className="middle">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/painting">Create a Painting</Link>

        </div>
        <div className="right side">
          <a>Welcome, {name}!</a>
          <button onClick={(e) => logout(e)}>Logout</button>
        </div>
      </div>
    </Fragment>
  )
}

export default PrivateDashboard
