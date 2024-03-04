import axios from "axios";
import { useEffect, useState } from "react";
import { MdOpenWith } from "react-icons/md";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { motion } from "framer-motion";

function Snapshots() {
  const [projectImages, setProjectImages] = useState(false);
  const initialContent = "Your long text goes here...";
  const [expanded, setExpanded] = useState(false);
  const [content, setContent] = useState(initialContent);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };
  useEffect(() => {
    axios
      .get("portfolio/project-images/")
      .then((res) => {
        setProjectImages(res.data);
        console.log(res.data);
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
        {projectImages &&
          projectImages.results.map((img, index) => {
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
                >
                  <MdOpenWith />
                </span>
                <span
                  className={`fav-img-icon ${
                    hoveredIndex === index ? "fav-img-icon02" : ""
                  }`}
                >
                  <MdFavoriteBorder />
                </span>
              </div>
            );
          })}
      </div>
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
