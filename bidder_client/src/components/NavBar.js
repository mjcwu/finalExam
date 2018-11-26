import React from "react";
import { NavLink /*, Link */ } from "react-router-dom";

const NavBar = props => {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Welcome
      </NavLink>
      |
      <NavLink exact to="/auctions">
        Auctions List
      </NavLink>
      |
      <NavLink exact to="/auctions/new">
        New Auction
      </NavLink>
    </nav>
  );
};

export default NavBar;