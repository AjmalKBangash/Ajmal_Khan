import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
function Navbar(props) {
  return (
    <>
      <div
        className={props.data ? "navbar" : "navbar02"}
        // className="navbar"
        // style={{ position: props.data ? "relative" : "sticky" }}
      >
        <div className="logo">AJAY</div>
        <NavLink
          to={""}
          // activeClassName={"colored"}
          // activeClassName={activeNavLink === "home" && "colored"}
          className={` ${props.data ? "active" : "active02"}`}
        >
          Home
        </NavLink>
        <NavLink
          to={""}
          // activeClassName={activeNavLink === "about" && "colored"}
          className={` ${props.data ? "active" : "active02"}`}
        >
          About
        </NavLink>
        <NavLink
          to={""}
          activeClassName={"colored"}
          className={` ${props.data ? "active" : "active02"}`}
        >
          Portfolio
        </NavLink>
        <NavLink to={""} className={` ${props.data ? "active" : "active02"}`}>
          Services
        </NavLink>
        <NavLink to={""} className={` ${props.data ? "active" : "active02"}`}>
          Blog
        </NavLink>
        <NavLink to={""} className={` ${props.data ? "active" : "active02"}`}>
          Contact
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
