import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <h1 className="header__title">Boilerplate</h1>
    <nav className="header__menu">
      <NavLink
        className="header__link"
        to="/"
        activeClassName="is-active"
        exact={true}
      >
        Dashboard
      </NavLink>
      <NavLink className="header__link" to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </nav>
  </header>
);

export default Header;
