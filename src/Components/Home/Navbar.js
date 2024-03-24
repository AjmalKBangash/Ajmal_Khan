import "./Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { showFavourites } from "../../Store/store";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
// REACT ICONS
import { IoCartOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
  const [showDropdownNavbar, setShowDropdownNavbar] = useState(false);
  const dispatch = useDispatch();
  const [favoritesLocalState, setFavouritesLocalState] = useState(
    JSON.parse(Cookies.get("favoritePictures") || "[]").length
  );
  const favoritesRefreshState_var = useSelector(
    (state) => state.favoritesRefreshState
  );
  const showNav_var = useSelector((state) => state.showNav);
  const activeNavLink_nav = useSelector((state) => state.activeNavLink);
  const location = useLocation();
  const navigate = useNavigate();
  // USEEFFECT FOR GETTING COOKIES, DEPENDENCY IS FOR THE REFRESHED DELETED AND UPDATED COOKIES
  useEffect(() => {
    setFavouritesLocalState(
      JSON.parse(Cookies.get("favoritePictures") || "[]").length
    );
  }, [favoritesRefreshState_var]);
  return (
    <>
      <div className={showNav_var ? "navbar" : "navbar02"}>
        <div
          className="logo"
          onClick={() => {
            navigate("/");
            if (document.getElementById("home-section")) {
              document
                .getElementById("home-section")
                .scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          AJAY
        </div>
        <NavLink
          to={"/"}
          className={`${activeNavLink_nav === "home" && "colored"} ${
            showNav_var ? "active" : "active02"
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
          to={"/"}
          className={`${activeNavLink_nav === "about" && "colored"} ${
            showNav_var ? "active" : "active02"
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
          to={"/"}
          activeClassName={"colored"}
          // className={` ${showNav_var ? "active" : "active02"}`}
          className={`${activeNavLink_nav === "services" && "colored"} ${
            showNav_var ? "active" : "active02"
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
          to={"/"}
          className={`${activeNavLink_nav === "snapshots" && "colored"} ${
            showNav_var ? "active" : "active02"
          }`}
          onClick={() =>
            document
              .getElementById("snapshots-section")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={"/"}
          className={`${activeNavLink_nav === "blogs" && "colored"} ${
            showNav_var ? "active" : "active02"
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
          to={"/"}
          className={`${activeNavLink_nav === "contact" && "colored"} ${
            showNav_var ? "active" : "active02"
          }`}
          onClick={() =>
            document
              .getElementById("contact-section")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact
        </NavLink>
        <div
          className={` ${showNav_var ? "active" : "active02"} navmenu`}
          onClick={() => {
            setShowDropdownNavbar(!showDropdownNavbar);
          }}
        >
          <CiMenuBurger />
          {showDropdownNavbar && (
            <div
              className={`${showNav_var ? "navbar03" : "navbar03 navbar033"}`}
            >
              <div
                className={`${activeNavLink_nav === "home" && "colored"} 
                            `}
                onClick={() => {
                  navigate("/");
                  if (document.getElementById("home-section")) {
                    document
                      .getElementById("home-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Home
              </div>
              <div
                className={`${activeNavLink_nav === "about" && "colored"} 
              `}
                onClick={() => {
                  navigate("/");
                  if (document.getElementById("about-section")) {
                    document
                      .getElementById("about-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                About
              </div>
              <div
                className={`${activeNavLink_nav === "services" && "colored"} 
              `}
                onClick={() => {
                  navigate("/");
                  if (document.getElementById("services-section")) {
                    document
                      .getElementById("services-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Services
              </div>
              <div
                className={`${activeNavLink_nav === "snapshots" && "colored"} 
              `}
                onClick={() => {
                  navigate("/");
                  if (document.getElementById("snapshots-section")) {
                    document
                      .getElementById("snapshots-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Projects
              </div>
              <div
                className={`${activeNavLink_nav === "blogs" && "colored"} 
              `}
                onClick={() => {
                  navigate("/");
                  if (document.getElementById("blogs-section")) {
                    document
                      .getElementById("blogs-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Blogs
              </div>
              <div
                className={`${activeNavLink_nav === "contact" && "colored"}
               `}
                onClick={() => {
                  navigate("/");
                  if (document.getElementById("contact-section")) {
                    document
                      .getElementById("contact-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact
              </div>
            </div>
          )}
        </div>

        {location.pathname === "/" && (
          <NavLink
            className={` my-fav-icon-noti 
        ${showNav_var ? "active" : "active02"}`}
            onClick={() => {
              dispatch(showFavourites(true));
            }}
            style={{ display: "flex" }}
          >
            {favoritesLocalState >= 1 && (
              <span className="my-fav-icon-notifications">
                {favoritesLocalState}
              </span>
            )}

            <IoCartOutline className="my-fav-icon" />
          </NavLink>
        )}
      </div>
    </>
  );
}

export default Navbar;
