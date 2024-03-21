import { Android } from "@mui/icons-material";
import "./Home.css";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

function Testemonials() {
  const [testemonialCardsWidth, settestemonialCardsWidth] = useState(1100);
  const [testemonialOriginalCardWidth, setTestemonialOriginalCardWidth] =
    useState(530);
  ///////////////////////////
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Function to update viewport dimensions when the window is resized
    function handleResize() {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    }

    // Add event listener to window resize event
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that effect runs only once after mount
  useEffect(() => {
    if (viewportWidth <= 1200 && viewportWidth > 1100) {
      settestemonialCardsWidth(950);
      setTestemonialOriginalCardWidth(455);
    } else if (viewportWidth <= 1100 && viewportWidth > 1000) {
      settestemonialCardsWidth(850);
      setTestemonialOriginalCardWidth(405);
    } else if (viewportWidth <= 1000 && viewportWidth > 900) {
      settestemonialCardsWidth(780);
      setTestemonialOriginalCardWidth(370);
    } else if (viewportWidth <= 900 && viewportWidth > 800) {
      settestemonialCardsWidth(700);
      setTestemonialOriginalCardWidth(330);
    } else if (viewportWidth <= 800 && viewportWidth > 700) {
      settestemonialCardsWidth(600);
      setTestemonialOriginalCardWidth(280);
    } else if (viewportWidth <= 700 && viewportWidth > 650) {
      settestemonialCardsWidth(600);
      setTestemonialOriginalCardWidth(280);
    } else if (viewportWidth <= 650 && viewportWidth > 585) {
      settestemonialCardsWidth(550);
      setTestemonialOriginalCardWidth(255);
    } else if (viewportWidth <= 585 && viewportWidth > 440) {
      settestemonialCardsWidth(400);
      setTestemonialOriginalCardWidth(180);
    } else if (viewportWidth <= 440 && viewportWidth > 0) {
      settestemonialCardsWidth(344);
      setTestemonialOriginalCardWidth(152);
    }
  }, [viewportWidth]);
  ///////////////////////////
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
      <div
        className="testemonial-cards"
        style={{
          width: `${testemonialCardsWidth}px`,
        }}
      >
        <div
          className="testemonial-cards02"
          ref={cardContainerRef}
          // style={{ transform: `translateX(${position * 550}px)` }}
          style={{
            transform: `translateX(${
              position * (testemonialOriginalCardWidth + 20)
            }px)`,
          }}
        >
          {projectImages &&
            projectImages.results.map((img, index) => {
              return (
                <div
                  key={index}
                  className="testemonial-card"
                  style={{
                    width: `${testemonialOriginalCardWidth}px`,
                  }}
                >
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
