import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar(props) {
  console.log(props.data);
  return (
    <>
      <div
        className={props.data ? "navbar" : "navbar02"}
        // className="navbar"
        // style={{ position: props.data ? "relative" : "sticky" }}
      >
        <div className="logo">AJAY</div>
        <NavLink to={""} className={` ${props.data ? "active" : "active02"}`}>
          Home
        </NavLink>
        <NavLink to={""} className={` ${props.data ? "active" : "active02"}`}>
          About
        </NavLink>
        <NavLink to={""} className={` ${props.data ? "active" : "active02"}`}>
          Portfolio
        </NavLink>
        <NavLink to={""} className={` ${props.data ? "active" : "active02"}`}>
          Services
        </NavLink>
        <NavLink to={""} className={` ${props.data ? "active" : "active02"}`}>
          Blog
        </NavLink>
        {/* <NavLink to={""}  className={` ${props.data ? "active" : "active02"}`} >
          Contact
        </NavLink> */}
      </div>
    </>
  );
}

export default Navbar;
