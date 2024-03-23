import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showFavourites, favoritesRefreshState } from "../../Store/store";
import Cookies from "js-cookie";
// REACT ICONS
import { IoCartOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { CiMenuBurger } from "react-icons/ci";

function Navbar(props) {
  const [showDropdownNavbar, setShowDropdownNavbar] = useState(false);
  const dispatch = useDispatch();
  const [favoritesLocalState, setFavouritesLocalState] = useState(
    JSON.parse(Cookies.get("favoritePictures") || "[]")
  );
  const favoritesRefreshState_var = useSelector(
    (state) => state.favoritesRefreshState
  );
  useEffect(() => {
    setFavouritesLocalState(
      JSON.parse(Cookies.get("favoritePictures") || "[]").length
    );
  }, [favoritesRefreshState_var]);
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
          className={` ${props.data.showNav ? "active" : "active02"} navmenu`}
          onClick={() => {
            setShowDropdownNavbar(!showDropdownNavbar);
          }}
        >
          <CiMenuBurger />
          {showDropdownNavbar && (
            <div
              className={`${
                props.data.showNav ? "navbar03" : "navbar03 navbar033"
              }`}
            >
              <div
                className={`${props.data.activeNavLink === "home" && "colored"} 
                            `}
                onClick={() =>
                  document
                    .getElementById("home-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Home
              </div>
              <div
                className={`${
                  props.data.activeNavLink === "about" && "colored"
                } 
              `}
                onClick={() =>
                  document
                    .getElementById("about-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                About
              </div>
              <div
                className={`${
                  props.data.activeNavLink === "services" && "colored"
                } 
              `}
                onClick={() =>
                  document
                    .getElementById("services-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Services
              </div>
              <div
                className={`${
                  props.data.activeNavLink === "snapshots" && "colored"
                } 
              `}
                onClick={() =>
                  document
                    .getElementById("snapshots-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Projects
              </div>
              <div
                className={`${
                  props.data.activeNavLink === "blogs" && "colored"
                } 
              `}
                onClick={() =>
                  document
                    .getElementById("blogs-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Blogs
              </div>
              <div
                className={`${
                  props.data.activeNavLink === "contact" && "colored"
                }
               `}
                onClick={() =>
                  document
                    .getElementById("contact-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact
              </div>
            </div>
          )}
        </NavLink>
        <NavLink
          className={` my-fav-icon-noti 
        ${props.data.showNav ? "active" : "active02"}`}
          onClick={() => {
            dispatch(showFavourites(true));
          }}
          style={{ display: "flex" }}
        >
          <span className="my-fav-icon-notifications">
            {favoritesLocalState && favoritesLocalState}
          </span>
          <IoCartOutline className="my-fav-icon" />
        </NavLink>
      </div>
      {/* <div className="navbar03">
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Projects</div>
        <div>Blogs</div>
        <div>Contactttttt</div>
      </div> */}
    </>
  );
}

export default Navbar;
