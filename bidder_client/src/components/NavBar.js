import React from "react";
import { NavLink /*, Link */ } from "react-router-dom";

const NavBar = props => {
  const { currentUser } = props;

  const handleSignOutClick = event => {
    event.preventDefault();

    if (typeof props.onSignOut === "function") {
      props.onSignOut();
    }
  };

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
      |
      {currentUser ? (
        <>
          <span>
          Aloha, {currentUser.first_name} 🐲
          |
          </span>
          <a href="#not-used" onClick={handleSignOutClick}>
            Sign Out
          </a>
        </>
      ) : (
        <NavLink exact to="/session/new">
          Sign In
        </NavLink>
      )}
    </nav>
  );
};

export default NavBar;