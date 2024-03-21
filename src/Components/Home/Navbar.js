import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showFavourites } from "../../Store/store";
// REACT ICONS
import { IoCartOutline } from "react-icons/io5";

function Navbar(props) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={props.data.showNav ? "navbar" : "navbar02"}>
        <div className="logo">AJAY</div>
        <NavLink
          className={`${props.data.activeNavLink === "home" && "colored"} ${
            props.data.showNav ? "active" : "active02"
          }`}
          onClick={() =>
            document
              .getElementById("home-section")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Home
        </NavLink>
        <NavLink
          className={`${props.data.activeNavLink === "about" && "colored"} ${
            props.data.showNav ? "active" : "active02"
          }`}
          onClick={() =>
            document
              .getElementById("about-section")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          About
        </NavLink>
        <NavLink
          activeClassName={"colored"}
          // className={` ${props.data.showNav ? "active" : "active02"}`}
          className={`${props.data.activeNavLink === "services" && "colored"} ${
            props.data.showNav ? "active" : "active02"
          }`}
          onClick={() =>
            document
              .getElementById("services-section")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Services
        </NavLink>
        <NavLink
          className={`${
            props.data.activeNavLink === "snapshots" && "colored"
          } ${props.data.showNav ? "active" : "active02"}`}
          onClick={() =>
            document
              .getElementById("snapshots-section")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Projects
        </NavLink>
        <NavLink
          className={`${props.data.activeNavLink === "blogs" && "colored"} ${
            props.data.showNav ? "active" : "active02"
          }`}
          onClick={() =>
            document
              .getElementById("blogs-section")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Blogs
        </NavLink>
        <NavLink
          className={`${props.data.activeNavLink === "contact" && "colored"} ${
            props.data.showNav ? "active" : "active02"
          }`}
          onClick={() =>
            document
              .getElementById("contact-section")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact
        </NavLink>
        <NavLink
          className={` my-fav-icon-noti 
        ${props.data.showNav ? "active" : "active02"}`}
          onClick={() => {
            dispatch(showFavourites(true));
          }}
        >
          <span className="my-fav-icon-notifications">7</span>
          <IoCartOutline className="my-fav-icon" />
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
