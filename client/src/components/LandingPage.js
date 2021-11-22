import React, {Fragment} from 'react';
import { Home } from './Home/Home';
import { Link } from "react-router-dom";


function LandingPage() {
  return (
    <Fragment>
      <div className="nav">
        <div className="left-side">

        </div>
        <div className="middle">

          <Link to="/about">About</Link>

          <Link to="/register">Register</Link>
        </div>
        <div className="right side">
          <Link to="/login">Login</Link>
          
        </div>
      </div>
    </Fragment>
  )
}

export default LandingPage
