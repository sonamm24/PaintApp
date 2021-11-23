import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';

export class Navbar extends React.Component {

  render() {
    return (
      <Nav>
        <NavLink to="/PaintApp/">
         <img className= "Img" src="https://cdn.discordapp.com/attachments/910237667722133566/911712885221228605/unknown.png"></img>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/PaintApp/" activeStyles>
            Home
          </NavLink>
          <NavLink to="/PaintApp/about" activeStyles>
            About
          </NavLink>
          <NavLink to="/PaintApp/register" activeStyles>
            Register
          </NavLink>
          <NavLink to="/PaintApp/painting" activeStyles>
            Create a Painting
          </NavLink>

        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/PaintApp/Login'>Log In</NavBtnLink>
        </NavBtn>

      </Nav>
    )
  }
}
