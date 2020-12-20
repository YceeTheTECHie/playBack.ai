import React, { useState } from 'react';
import btn from '../../Assests/Images/power.png';
import logo from '../../Assests/Images/logo.svg';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
  return (
    <div className="container-fluid navbar">
      <Nav  >
        <img src={logo} className="logo"/>
              <NavLink href="#" className="logo-text">PlayBack</NavLink>
              <NavLink  className="text">kannan@text.com</NavLink> <button className="button">K</button><NavLink><img src={btn} className="power"/></NavLink>
      </Nav>
    </div>
  );
}

export default NavBar;
  