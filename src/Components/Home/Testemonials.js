import { Android } from "@mui/icons-material";
import "./Testemonials.css";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// REACT ICONS
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

function Testemonials() {
  const [testemonialCardsWidth, settestemonialCardsWidth] = useState(1100);
  const [testemonialOriginalCardWidth, setTestemonialOriginalCardWidth] =
    useState(530);
  const [onlyOneTestemonialCard, setOnlyOneTestemonialCard] = useState(2);
  ///////////////////////////
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [refAbout, inViewAbout] = useInView({
    // triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });
  const [refBtn, inViewBtn] = useInView({
    // triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });

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
    } else if (viewportWidth <= 650 && viewportWidth > 560) {
      setOnlyOneTestemonialCard(1);
      settestemonialCardsWidth(500);
      setTestemonialOriginalCardWidth(480);
    } else if (viewportWidth <= 560 && viewportWidth > 450) {
      settestemonialCardsWidth(400);
      setTestemonialOriginalCardWidth(380);
    } else if (viewportWidth <= 450 && viewportWidth > 0) {
      settestemonialCardsWidth(320);
      setTestemonialOriginalCardWidth(300);
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
      .get("portfolio/testimonials/")
      .then((res) => {
        setProjectImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (
      position > -(projectImages.results?.length - onlyOneTestemonialCard) &&
      !sliding
    ) {
      /////////////////////////////
      if (
        position ===
        -(projectImages.results?.length - (onlyOneTestemonialCard + 1))
      ) {
        //////////////////////////////////////
        setSliding(true);
      }
      const interval = setInterval(animateLeft, 6000); // Auto-slide every 3 seconds
      return () => clearInterval(interval);
    } else {
      if (position === -1) {
        setSliding(false);
      }
      const interval = setInterval(animateRight, 6000); // Auto-slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [position, projectImages.results]);
  return (
    <div className="snapshots">
      <motion.h1
        className=""
        ref={refAbout} // Use refAbout for h1
        initial={{ y: -30, opacity: 0.2 }}
        animate={{
          y: inViewAbout ? 0 : -30,
          opacity: inViewAbout ? 1 : 0.2,
        }}
        transition={{ duration: 1.5 }}
      >
        TESTEMONIALS
      </motion.h1>
      <motion.h3
        ref={refAbout} // Use refAbout for h3
        initial={{ y: -30, opacity: 0.2 }}
        animate={{
          y: inViewAbout ? 0 : -30,
          opacity: inViewAbout ? 1 : 0.2,
        }}
        transition={{ duration: 1.5 }}
      >
        What clients say about me
      </motion.h3>
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
            projectImages.results.map((testimonial, index) => {
              return (
                <div
                  key={index}
                  className="testemonial-card"
                  style={{
                    width: `${testemonialOriginalCardWidth}px`,
                  }}
                >
                  <img
                    src={testimonial.testemonial_photo}
                    className="testemonial-card-profile"
                  ></img>
                  <div className="testemonial-card-namedescrip">
                    <div className="testemonial-card-name">
                      {testimonial.testemonial_name}{" "}
                    </div>
                    <div className="testemonial-card-descrip">
                      {testimonial.testemonial_description}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <motion.button
          className="testemonial-btn"
          onClick={animateLeft}
          disabled={
            position ===
            -(projectImages.results?.length - onlyOneTestemonialCard)
          }
          ref={refBtn}
          initial={{ x: -30, opacity: 0.2 }}
          animate={{ x: inViewBtn ? 0 : -30, opacity: inViewBtn ? 1 : 0.2 }}
          transition={{ duration: 1.5 }}
        >
          <FaAnglesLeft />
        </motion.button>
        <motion.button
          className="testemonial-btn"
          onClick={animateRight}
          disabled={position === 0}
          ref={refBtn}
          initial={{ x: 30, opacity: 0.2 }}
          animate={{
            x: inViewBtn ? 0 : 30,
            opacity: inViewBtn ? 1 : 0.2,
          }}
          transition={{ duration: 1.5 }}
        >
          <FaAnglesRight />
        </motion.button>
      </div>
    </div>
  );
}

export default Testemonials;
