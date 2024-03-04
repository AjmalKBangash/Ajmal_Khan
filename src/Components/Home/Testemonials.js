import "./Home.css";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

function Testemonials() {
  const [projectImages, setProjectImages] = useState(false);
  const [position, setPosition] = useState(0);
  const [sliding, setSliding] = useState(false);

  const cardContainerRef = useRef(null);

  function animateRight() {
    setPosition(position + 1);
  }
  function animateLeft() {
    setPosition(position - 1);
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
  useEffect(() => {
    if (position > -(projectImages.results?.length - 2) && !sliding) {
      if (position === -(projectImages.results?.length - 3)) {
        setSliding(true);
      }
      const interval = setInterval(animateLeft, 3000); // Auto-slide every 3 seconds
      return () => clearInterval(interval);
    } else {
      if (position === -1) {
        setSliding(false);
      }
      const interval = setInterval(animateRight, 3000); // Auto-slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [position, projectImages.results]);
  return (
    <div className="snapshots">
      <h1>TESTEMONILAS</h1>
      <h3>What clients say about me!</h3>
      <div className="testemonial-cards">
        <div
          className="testemonial-cards02"
          ref={cardContainerRef}
          style={{ transform: `translateX(${position * 550}px)` }}
        >
          {projectImages &&
            projectImages.results.map((img, index) => {
              return (
                <div key={index} className="testemonial-card">
                  <img
                    src="images/Ajay.png"
                    className="testemonial-card-profile"
                  ></img>
                  <div className="testemonial-card-namedescrip">
                    <div className="testemonial-card-name">AJMAL KHAN</div>
                    <div className="testemonial-card-descrip">
                      Explore my portfolio to discover the projects that
                      showcase my commitment to delivering innovative solutions
                      and my journey towards mastering cutting-edge technologies
                      in the ever-evolving landscape of software and DevOps
                      Engineering.
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <button
          className="testemonial-btn"
          onClick={animateLeft}
          disabled={position === -(projectImages.results?.length - 2)}
        >
          <FaAnglesLeft />
        </button>
        <button
          className="testemonial-btn"
          onClick={animateRight}
          disabled={position === 0}
        >
          <FaAnglesRight />
        </button>
      </div>
    </div>
  );
}

export default Testemonials;
