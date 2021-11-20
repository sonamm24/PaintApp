import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';

export class Navbar extends React.Component {

  render() {
    return (
      <Nav>
        <NavLink to="/">
         <img className= "Img" src="https://cdn.discordapp.com/attachments/910237667722133566/911712885221228605/unknown.png"></img>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyles>
            Home
          </NavLink>
          <NavLink to="/about" activeStyles>
            About
          </NavLink>
          <NavLink to="/register" activeStyles>
            Register
          </NavLink>
          <NavLink to="/painting" activeStyles>
            Create a Painting
          </NavLink>

        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Login'>Log In</NavBtnLink>
        </NavBtn>

      </Nav>
    )
  }
}
