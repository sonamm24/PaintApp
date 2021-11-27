import React, {Fragment} from 'react';
// import { Link } from "react-router-dom";

import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from '../components/NavBar/NavBarElements'


function LandingPage() {
  return (
    <Nav>
      
      <NavLink to="/">
      <img className= "img-logo" src="https://cdn.discordapp.com/attachments/910237667722133566/911712885221228605/unknown.png" ></img>
      </NavLink>
      <Bars />
      <NavMenu>
        <a><NavLink exact to="/" activeStyles>Home</NavLink></a>

        <a><NavLink exact to="/about" activeStyles>About</NavLink></a>

        <a><NavLink exact to="/register" activeStyles>Register</NavLink></a>

        <a><NavLink exact to="/login" activeStyles>Login</NavLink></a>
      </NavMenu>
    </Nav>
    // <Fragment>
    //   <div className="nav-bar">
    //     <div className="left-side">

    //       <Link to="/">
    //     <img className= "img-logo" src="https://cdn.discordapp.com/attachments/910237667722133566/911712885221228605/unknown.png" ></img>
    //       </Link>
    
    //     </div>
    //     <div className="middle">

    //     <a><Link className="main-nav" activeClassName="main-nav-active" exact to="/">Home</Link></a>

    //     <a><Link exact to="/about">About</Link></a>

    //     <a><Link exact to="/register">Register</Link></a>
    //     </div>
    //     <div className="right side">
    //       <a><Link exact to="/login">Login</Link></a>
          
    //     </div>
    //   </div>
    // </Fragment>
  )
}

export default LandingPage
