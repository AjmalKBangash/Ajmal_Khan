import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">AJAY</div>
        <NavLink to={""} className="navbar-items item">
          Home
        </NavLink>
        <NavLink to={""} className="navbar-items item">
          About
        </NavLink>
        <NavLink to={""} className="navbar-items item">
          Portfolio
        </NavLink>
        <NavLink to={""} className="navbar-items item">
          Services
        </NavLink>
        <NavLink to={""} className="navbar-items item">
          Blog
        </NavLink>
        {/* <NavLink to={""} className="navbar-items item">
          Contact
        </NavLink> */}
      </div>
    </>
  );
}

export default Navbar;
