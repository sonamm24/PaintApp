import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/" activeStyles>
          Home
        </NavLink>
        <NavLink to="/about" activeStyles>
          About
        </NavLink>
        <NavLink to="/sign-Up" activeStyles>
          Sign Up
        </NavLink>

      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
      </NavBtn>

    </Nav>
  )
}

export default Navbar
