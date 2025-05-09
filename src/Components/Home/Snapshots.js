import "./Snapshots.css";
import "./Home.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { favoritesRefreshState } from "../../Store/store";
import { useInView } from "react-intersection-observer";
// RAECT ICONS
import { MdOpenWith } from "react-icons/md";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

/////////////////////////////////////////////////////////////////////////////////////////////
let projectImagess = [
  {
    img_no: 0,
    image: "/ProjectImages/0.png",
    description: "AYO Web",
  },
  {
    img_no: 1,
    image: "/ProjectImages/1.png",
    description: "AYO Web",
  },
  {
    img_no: 2,
    image: "/ProjectImages/2.png",
    description: "Admin HMS",
  },
  {
    img_no: 3,
    image: "/ProjectImages/3.png",
    description: "Admin HMS",
  },
  {
    img_no: 4,
    image: "/ProjectImages/4.png",
    description: "Dr Dashboard HMS",
  },
  {
    img_no: 5,
    image: "/ProjectImages/5.png",
    description: "Dr Profile HMS",
  },
  {
    img_no: 6,
    image: "/ProjectImages/6.png",
    description: "Dr Prescription HMS",
  },
  {
    img_no: "7",
    image: "/ProjectImages/7.png",
    description: "Receptionist HMS",
  },
  {
    img_no: 8,
    image: "/ProjectImages/8.png",
    description: "E-commerce",
  },
  {
    img_no: 9,
    image: "/ProjectImages/9.png",
    description: "E-commerce",
  },
  {
    img_no: 10,
    image: "/ProjectImages/10.png",
    description: "E-commerce",
  },
  {
    img_no: 11,
    image: "/ProjectImages/11.png",
    description: "E-commerce",
  },
  {
    img_no: 12,
    image: "/ProjectImages/12.png",
    description: "Hube-Rasool Web",
  },
  {
    img_no: 13,
    image: "/ProjectImages/13.png",
    description: "Hube-Rasool Web",
  },
  {
    img_no: 14,
    image: "/ProjectImages/14.png",
    description: "Hube-Rasool Web",
  },
  {
    img_no: 15,
    image: "/ProjectImages/15.png",
    description: "Data Structures",
  },
  {
    img_no: 16,
    image: "/ProjectImages/16.png",
    description: "REST APIs",
  },
  {
    img_no: 17,
    image: "/ProjectImages/17.png",
    description: "Throttling (Security)",
  },
  {
    img_no: 18,
    image: "/ProjectImages/18.png",
    description: "Scripting",
  },
  {
    img_no: 19,
    image: "/ProjectImages/19.png",
    description: "Nginx (Web Server)",
  },
  {
    img_no: 20,
    image: "/ProjectImages/20.png",
    description: "AWS (Configuring Server)",
  },
];

function Snapshots() {
  // let projectImagesFromUpper = projectImagess
  const [projectImages, setProjectImages] = useState(projectImagess);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  let [carousel, setCarousel] = useState(false);
  let [imgSrc, setImgSrc] = useState("");
  let [imgID, setImgID] = useState();
  const dispatch = useDispatch();
  const favoritesRefreshState_var = useSelector(
    (state) => state.favoritesRefreshState
  );
  const [refAbout, inViewAbout] = useInView({
    // triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });
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
      setImgID(projectImages && projectImages.length - 1);
    } else {
      setImgID(imgID - 1);
    }
  }
  function nxtFunCarousel() {
    const isLastSlide = imgID === (projectImages && projectImages?.length - 1);
    if (isLastSlide) {
      setImgID(0);
    } else {
      setImgID(imgID + 1);
    }
  }
  // THIS USEEFFECT IS FOR PREFUNCAROUSEL AND NXTFUNCAROUSEL
  useEffect(() => {
    setImgSrc(projectImages && projectImages[imgID]?.image);
  }, [imgID]);

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
        expires: 21,
      }); // Expires in 7 days
      dispatch(favoritesRefreshState(favoritesRefreshState_var + 1));
      alert("Picture added to favorites!");
    } else {
      alert("Picture already in favorites!");
    }
  };
  // THIS IS FOR PROJECT IMAGES FROM BACKEND 
  // useEffect(() => {
  //   axios
  //     .get("portfolio/project-images/")
  //     .then((res) => {
  //       setProjectImages(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // THIS IS FROM UPPER PROJECT IMAGES 
//   useEffect=(() => {
// if (projectImages.length < 0) {
// setProjectImages(projectImages)
// }
//   },[])

  return (
    <div className="snapshots">
      <motion.h1
        className=""
        ref={refAbout}
        initial={{ y: -30, opacity: 0.2 }}
        animate={{
          y: inViewAbout ? 0 : -30,
          opacity: inViewAbout ? 1 : 0.2,
        }}
        transition={{ duration: 1.5 }}
      >
        PROJECTS
      </motion.h1>
      <motion.h3
        ref={refAbout}
        initial={{ y: -30, opacity: 0.2 }}
        animate={{
          y: inViewAbout ? 0 : -30,
          opacity: inViewAbout ? 1 : 0.2,
        }}
        transition={{ duration: 1.5 }}
      >
        Few Snapshots from my Projects
      </motion.h3>
      <div className="gallary">
        {projectImages &&
          // projectImages.results.map((img, index) => {
            projectImages.map((img, index) => {
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
                <span
                  className={`img-des ${
                    hoveredIndex === index ? "img-des02" : ""
                  }`}
                >
                  {img.description}
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
    </div>
  );
}

export default Snapshots;
