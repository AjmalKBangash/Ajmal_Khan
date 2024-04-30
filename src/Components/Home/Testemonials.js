import "./Testemonials.css";
// import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// REACT ICONS
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";

let projectImages = [
  {
    testemonial_name: "Safir Kashmiri",
    testemonial_photo: "Testemonials/Safir-test.jpg",
    testemonial_description:
      "Ajmal assisted with deploying my project, which I developed. The deployed project follows a decoupled architecture, utilizing Nginx for reverse proxying which enables both frontend and backend on the same server with same domain. His services are highly efficient and to the point.",
  },
  {
    testemonial_name: "Amir Leo",
    testemonial_photo: "Testemonials/amir.jpeg",
    testemonial_description:
      "He possesses advanced skills in backend development and crafting REST APIs. He has developed 100s of APIs for my projects and i strongly recommend him for any REST APIs-related tasks.",
  },
  {
    testemonial_name: "Dr Kamil",
    testemonial_photo: "Testemonials/kamil-test.jpeg",
    testemonial_description:
      "For our Hospital Management System, you'll witness the complete transformation from a paper-based system to a digital, advanced platform. This transition ensures efficiency and time-saving measures. I highly recommend these developers for their exceptional work.",
  },
  {
    testemonial_name: "Theodore",
    testemonial_photo: "Testemonials/rehman-test.jpeg",
    testemonial_description:
      "He is highly regarded as an expert in AWS services for deploying applications via EC2 AWS instances. His approach of containerizing applications before deployment is both comprehensive and informative, showcasing his expertise and proficiency in the field.",
  },
  {
    testemonial_name: "Moiz Khan",
    testemonial_photo: "Testemonials/haris-test.jpeg",
    testemonial_description:
      '"He has created a captivating website for my business, and I am thoroughly pleased with his work. I eagerly anticipate working with him again in the future."',
  },
];

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
  // const [projectImages, setProjectImages] = useState(false);
  const [position, setPosition] = useState(0);
  const [sliding, setSliding] = useState(false);

  const cardContainerRef = useRef(null);

  function animateRight() {
    setPosition(position + 1);
  }
  function animateLeft() {
    setPosition(position - 1);
  }

  // useEffect(() => {
  //   axios
  //     .get("portfolio/testimonials/")
  //     .then((res) => {
  //       setProjectImages(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  useEffect(() => {
    if (
      position > -(projectImages?.length - onlyOneTestemonialCard) &&
      !sliding
    ) {
      /////////////////////////////
      if (
        position === -(projectImages?.length - (onlyOneTestemonialCard + 1))
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
  }, [position, projectImages]);
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
            projectImages.map((testimonial, index) => {
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
                      {testimonial.testemonial_name}
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
            position === -(projectImages?.length - onlyOneTestemonialCard)
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
