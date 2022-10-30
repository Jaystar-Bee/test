import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.listCover}>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              hook
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reducer"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              reducer
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
