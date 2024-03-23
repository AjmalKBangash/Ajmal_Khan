import "./Snapshots.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { favoritesRefreshState, showFavourites } from "../../Store/store";
// RAECT ICONS
import { MdOpenWith } from "react-icons/md";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

function Snapshots() {
  const [projectImages, setProjectImages] = useState(false);
  const initialContent = "Your long text goes here...";
  const [expanded, setExpanded] = useState(false);
  const [content, setContent] = useState(initialContent);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  let [carousel, setCarousel] = useState(false);
  let [imgSrc, setImgSrc] = useState("");
  let [imgID, setImgID] = useState();
  const dispatch = useDispatch();
  const favoritesRefreshState_var = useSelector(
    (state) => state.favoritesRefreshState
  );
  function ViewImage(e) {
    setCarousel(true);
    setImgSrc(e.image);
    setImgID(e.img_no);
  }
  function closeCarouselFun() {
    setCarousel(!carousel);
  }

  function preFunCarousel() {
    const isFirstSlide = imgID === 0;
    if (isFirstSlide) {
      // setImgID(8);
      setImgID(projectImages && projectImages.results.length - 1);
    } else {
      setImgID(imgID - 1);
    }
    setImgSrc(projectImages && projectImages.results[imgID].image);
  }
  function nxtFunCarousel() {
    const isLastSlide =
      imgID === (projectImages && projectImages.results?.length - 1);
    if (isLastSlide) {
      setImgID(0);
    } else {
      setImgID(imgID + 1);
    }
    setImgSrc(projectImages && projectImages.results[imgID].image);
  }

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  // ADDING PROJECT SNAPSHOTS URLS TO COOKIES
  const handleClick = (photo) => {
    // Retrieve existing favorites from the cookie or initialize an empty array
    const favorites = Cookies.get("favoritePictures") || "[]";

    // Parse the favorites as JSON
    const favoritesArray = JSON.parse(favorites);

    // Check if the clicked picture is already a favorite
    if (!favoritesArray.includes(photo.image)) {
      // Add the clicked picture to the favoritesArray array
      favoritesArray.push(photo.image);

      // Update the cookie with the new favorites array
      Cookies.set("favoritePictures", JSON.stringify(favoritesArray), {
        expires: 7,
      }); // Expires in 7 days
      dispatch(favoritesRefreshState(favoritesRefreshState_var + 1));
      alert("Picture added to favorites!");
    } else {
      alert("Picture already in favorites!");
    }
  };
  useEffect(() => {
    axios
      .get("portfolio/project-images/")
      .then((res) => {
        setProjectImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //////////////////////////////////////////
  // Retrieve existing favorites from the cookie or initialize an empty array
  // const favorites = Cookies.get("favoritePictures") || "[]";

  // // Parse the favorites as JSON
  // const favoritesArray = JSON.parse(favorites);

  // // Check if the clicked picture is already a favorite
  // if (!favoritesArray.includes(photo.image)) {
  //   // Add the clicked picture to the favoritesArray array
  //   favoritesArray.push(photo.image);

  //   // Update the cookie with the new favorites array
  //   Cookies.set("favoritePictures", JSON.stringify(favoritesArray), {
  //     expires: 7,
  //   }); // Expires in 7 days
  //   alert("Picture added to favorites!");
  // } else {
  //   alert("Picture already in favorites!");
  // }
  ///////////////////////////////////////////////////////////////////////
  return (
    <div className="snapshots">
      <h1>PROJECTS</h1>
      <h3>Few Snapshots from my Projects</h3>
      <div className="gallary">
        {projectImages &&
          projectImages.results.map((img, index) => {
            const favoritesArray = JSON.parse(
              Cookies.get("favoritePictures") || "[]"
            );
            const isFavorite = favoritesArray.includes(img.image);
            return (
              <div
                key={index}
                className={`gallary-inside ${
                  hoveredIndex === index ? "gallary-inside02" : ""
                }`}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
              >
                <img src={img.image} alt="project images" />
                <span
                  className={`view-img-icon ${
                    hoveredIndex === index ? "view-img-icon02" : ""
                  }`}
                  onClick={() => {
                    ViewImage(img);
                  }}
                >
                  <MdOpenWith />
                </span>
                <span
                  className={`fav-img-icon ${
                    hoveredIndex === index ? "fav-img-icon02" : ""
                  }`}
                  onClick={() => handleClick(img)}
                >
                  {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
                </span>
              </div>
            );
          })}
      </div>
      {/* //////////////// */}
      <div className={carousel ? "carousel open" : ""}>
        <span
          onClick={preFunCarousel}
          className={carousel ? "slidingCarousel" : "slidingCarouselClose"}
          style={{ marginRight: "80%" }}
        >
          <FaChevronLeft />
        </span>
        <span
          onClick={closeCarouselFun}
          className={carousel ? "closeCarousel" : "slidingCarouselClose"}
        >
          {/* &#x2A2F;  */}
          <MdClose />
        </span>

        <img className={carousel ? "" : "slidingCarouselClose"} src={imgSrc} />
        <span
          onClick={nxtFunCarousel}
          className={carousel ? "slidingCarousel" : "slidingCarouselClose"}
          style={{ marginLeft: "80%" }}
        >
          <FaChevronRight />
        </span>
      </div>
      {/* ..//////////////// */}
    </div>
  );
}

export default Snapshots;

// <p
//   className={`img-description ${expanded ? "expanded" : ""}`}
//   onClick={toggleExpand}
// >
//   {img.description}
//   {!expanded && content.length > 80 && (
//     <span className="more">More...</span>
//   )}
// </p>;
