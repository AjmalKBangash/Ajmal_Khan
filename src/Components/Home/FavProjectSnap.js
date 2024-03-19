import "./Snapshots.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// RAECT ICONS
import { MdOpenWith } from "react-icons/md";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

function FavProjectSnap() {
  const [projectImages, setProjectImages] = useState(false);
  const initialContent = "Your long text goes here...";
  const [expanded, setExpanded] = useState(false);
  const [content, setContent] = useState(initialContent);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  let [carousel, setCarousel] = useState(false);
  let [imgSrc, setImgSrc] = useState("");
  let [imgID, setImgID] = useState();
  ////////////// EXTRACTING IMAGES
  const favorites = JSON.parse(Cookies.get("favoritePictures") || "[]");
  function ViewImage(e) {
    setCarousel(true);
    setImgSrc(e.image);
    setImgID(e.img_no);
  }
  function closeCarouselFun() {
    setCarousel(!carousel);
  }

  function preFunCarousel() {
    //   EXTRACTING FAV SNAPS FROM COOKIES
    const favorites = JSON.parse(Cookies.get("favoritePictures") || "[]");
    const isFirstSlide = imgID === 0;
    if (isFirstSlide) {
      // setImgID(8);
      setImgID(favorites.length - 1);
    } else {
      setImgID(imgID - 1);
    }
    setImgSrc(favorites[imgID]);
  }
  function nxtFunCarousel() {
    const favorites = JSON.parse(Cookies.get("favoritePictures") || "[]");
    const isLastSlide = imgID === favorites.length - 1;
    if (isLastSlide) {
      setImgID(0);
    } else {
      setImgID(imgID + 1);
    }
    setImgSrc(favorites[imgID]);
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

  // DELETING COOKIES
  function removeItemFromArray(arr, item) {
    const index = arr.indexOf(item);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }

  function handleClick(photoOnly) {
    const favorites = JSON.parse(Cookies.get("favoritePictures") || "[]");

    // Remove the photoOnly from favorites array
    removeItemFromArray(favorites, photoOnly);

    // Update the cookie with the new favorites array
    Cookies.set("favoritePictures", JSON.stringify(favorites), {
      expires: 7,
    }); // Expires in 7 days
  }
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
  return (
    <div className="snapshots">
      <h1>SNAPSHOTS</h1>
      <h3>Few Snapshots from my Projects</h3>
      <div className="gallary">
        {/* /////////////////// */}
        {/* {favorites.length > 0 ? (
        <div className="favorite-pictures">
          {favorites.map((image, index) => (
            <img key={index} src={image} alt={`Favorite ${index + 1}`} />
          ))}
        </div>
      ) : (
        <p>No favorite pictures yet.</p>
      )} */}
        {/* ///////////////////////// */}
        {favorites.length > 0 &&
          favorites.map((img, index) => {
            return (
              <div
                key={index}
                className={`gallary-inside ${
                  hoveredIndex === index ? "gallary-inside02" : ""
                }`}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={handleMouseOut}
              >
                <img src={img} alt="project images" />
                <span
                  className={`view-img-icon ${
                    hoveredIndex === index ? "view-img-icon02" : ""
                  }`}
                  onClick={() => {
                    ViewImage({ image: img, img_no: index });
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
                  <MdFavorite />
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

export default FavProjectSnap;
