import "./Home.css";
import "./Navbar.css";
import Navbar from "./Navbar";
import Services from "./Services";
import Testemonials from "./Testemonials";
import FavProjectSnap from "./FavProjectSnap";
import DownloadPDF from "../PortfolioWork/DownloadPDF";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showNav, activeNavLink } from "../../Store/store";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

// REACT ICONS
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import SkillsTool from "./SkillsTool";
import Snapshots from "./Snapshots";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Footer from "./Footer";
import axios from "axios";
function Home() {
  const [skillTools, setSkillTools] = useState(false);
  const dispatch = useDispatch();
  const [ref, inView] = useInView();
  // const [refProfile, inViewProfile] = useInView({
  //   threshold: 0.2, // Trigger animation when 20% of the element is in view
  // });
  const [refAbout, inViewAbout] = useInView({
    // triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });
  //////////////////////////////////  THIS IS WHERE WHEN SCROLLING Y AXIS SECTIONOFFSETS WILL UPATE ACCORDING TO GIVEN IDS (SECTIONS)
  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = {
        home: document.getElementById("home-section").offsetTop, // Adjust this value if needed
        about: document.getElementById("about-section").offsetTop,
        // portfolio: document.getElementById("portfolio-section").offsetTop,
        services: document.getElementById("services-section").offsetTop,
        snapshots: document.getElementById("snapshots-section").offsetTop,
        blogs: document.getElementById("blogs-section").offsetTop,
        contact: document.getElementById("contact-section").offsetTop,
        // Add more sections as needed
      };

      const scrollPosition = window.scrollY;
      let activeSection = "home";

      // Determine the active section based on the scroll position
      Object.entries(sectionOffsets).forEach(([section, offset]) => {
        if (scrollPosition >= offset) {
          activeSection = section;
        }
      });

      // Update the activeNavLink state
      dispatch(activeNavLink(activeSection));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (!inView) {
      // Perform your action when the element is out of view
      dispatch(showNav(false));
    } else {
      // Perform your action when the element is out of view
      dispatch(showNav(true));
    }
  }, [inView]);
  useEffect(() => {
    axios
      .get("portfolio/skill-tools/")
      .then((res) => {
        setSkillTools(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div id="home-section"></div>
      <Navbar />
      <div class="background-img" ref={ref}>
        <div className="background-img-clr">
          <div className="background-img-div">
            <AnimatePresence>
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 2.5 }}
              >
                <img src="images/Ajay.png" className="profile-img "></img>
                <h1 className=" center-items">AJMAL KHAN</h1>
                <div className=" center-items">
                  I am a Software and DevOps Engineer
                </div>
                <div className="social-icons">
                  <FaLinkedin
                    className="social-icons-each"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/ajmal-khan-620356181/",
                        "_blank"
                      )
                    }
                  />
                  <FaInstagram
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/ajmalbangash/",
                        "_blank"
                      )
                    }
                    className="social-icons-each"
                  />

                  <FaGithub
                    className="social-icons-each"
                    onClick={() =>
                      window.open(" https://github.com/AjmalKBangash", "_blank")
                    }
                  />
                  <FaDocker
                    onClick={() =>
                      window.open(
                        "https://hub.docker.com/u/ajmalkhanbangash",
                        "_blank"
                      )
                    }
                    className="social-icons-each"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
            <div>
              {/* <span className="two-btns-on-back-img" onClick={downloadCV}> */}
              <DownloadPDF />
              {/* </span> */}
              <motion.span
                className="two-btns-on-back-img"
                onClick={() =>
                  document
                    .getElementById("contact-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 150, opacity: 0 }}
                transition={{ duration: 2 }}
              >
                Contact Me
              </motion.span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container">
        <br />
        <br />
        <br />
        <br />
        <div className="about" id="about-section">
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
            ABOUT
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
            Introduction to my Development Experience and Skills
          </motion.h3>

          <br />
          <motion.p
            ref={refAbout} // Use refAbout for h3
            initial={{ y: -30, opacity: 0.2 }}
            animate={{
              y: inViewAbout ? 0 : -30,
              opacity: inViewAbout ? 1 : 0.2,
            }}
            transition={{ duration: 1.5 }}
          >
            Welcome to my portfolio! I am a skilled developer with expertise in
            developing robust backend business logics and REST APIs using Python
            with Django. My passion extends to creating seamless user
            interfaces, where I leverage JavaScript with React as my framework
            of choice. I have hands-on experience with Nginx, employing it for
            reverse proxy, load balancing, and efficiently proxying requests.
            {/* </p> */}
            {/* <p> */}
            In the realm of containerization, I possess proficiency in Docker,
            ensuring that applications run consistently across various
            environments. Continuously striving for excellence, I am actively
            enhancing my skills in cloud computing, with a focus on AWS,GCD and
            Azure and delving into the world of DevOps Engineering its tools and
            technologies.
          </motion.p>
          <br />
          <motion.p
            ref={refAbout} // Use refAbout for h3
            initial={{ y: -30, opacity: 0.2 }}
            animate={{
              y: inViewAbout ? 0 : -30,
              opacity: inViewAbout ? 1 : 0.2,
            }}
            transition={{ duration: 1.5 }}
          >
            Explore my portfolio to discover the projects that showcase my
            commitment to delivering innovative solutions and my journey towards
            mastering modern technologies in the ever-evolving landscape of
            software and DevOps Engineering.
          </motion.p>
        </div>

        <div className="skillful-tools">
          {skillTools &&
            skillTools.results?.map((skillper, index) => {
              return (
                <SkillsTool
                  data={{ skill: skillper.skill, per: skillper.per }}
                />
              );
            })}
          {/* <div>
            <div className="skillful-tools-name-per">
              <span>React</span>
              <span>80%</span>
            </div>
            <div className="skillful-tools-grey">
              <div className="skillful-tools-orange"></div>
            </div>
          </div> */}
        </div>

        <br />
        <br />
        <br />
        <div id="services-section">
          <Services />
        </div>
        <br />
        <br />
        <br />
        <div id="snapshots-section">
          <Snapshots />
        </div>
        <br />
        <br />
        <br />
        <div id="testemonials-section">
          <Testemonials />
        </div>
        <br />
        <br />
        <br />
        <div id="blogs-section">
          <Blogs />
        </div>
        <br />
        <br />
        <br />
        <div id="contact-section">
          <Contact />
        </div>
        <br />
        <br />
        <FavProjectSnap />
        <br />
        <div id="footer-section"></div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
