import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" exact activeClassName="is-active">
      Home Page
    </NavLink>
    <NavLink to="/portfolio" exact activeClassName="is-active">
      Portfolio Home Page
    </NavLink>
    <NavLink to="/contact" activeClassName="is-active">
      Contact Page
    </NavLink>
  </header>
);

export default Header;
