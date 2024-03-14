import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

function Blogs() {
  const [projectImages, setProjectImages] = useState(false);
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
      <h1>BLOGS</h1>
      <h3>My Latest Blogs</h3>
      <div className="blogs">
        {projectImages &&
          projectImages.results.map((blog, index) => {
            return (
              <div key={index} className="blog-card">
                <img src="images/career.jpeg" className="blog-card-img"></img>
                <div className="blog-card-date">03-05-2024</div>
                <h3 className="blog-card-title">CAREER COUNSELLING</h3>
                <div className="blog-card-descrip">
                  Career counseling involves guiding individuals in exploring,
                  understanding, and making informed decisions about their
                  career paths, taking into account their skills, interests,
                  values, and goals.
                </div>
                <h4 className="blog-card-visit">Visit Blog {">>"}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Blogs;
