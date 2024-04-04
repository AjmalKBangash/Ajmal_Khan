import "./Footer.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// REACT ICONS
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentDate = new Date();
  // GETTING CURRENT YEAR
  const currentYear = currentDate.getFullYear();

  const [refAbout, inViewAbout] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });
  return (
    <>
      <div className="footer">
        <div>
          <motion.div
            className="footer-getintouch"
            ref={refAbout}
            initial={{ y: -33, opacity: 0.2 }}
            animate={{
              y: inViewAbout ? 0 : -33,
              opacity: inViewAbout ? 1 : 0.2,
            }}
            transition={{ duration: 0.8 }}
          >
            <ul>
              <li>
                <FaLinkedin
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/ajmal-khan-620356181/",
                      "_blank"
                    )
                  }
                  className="footer-social-icons-each"
                />
                <FaInstagram
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/ajmalbangash/",
                      "_blank"
                    )
                  }
                  className="footer-social-icons-each"
                />
                <FaGithub
                  onClick={() =>
                    window.open("https://github.com/AjmalKBangash", "_blank")
                  }
                  className="footer-social-icons-each"
                />
                <FaDocker
                  onClick={() =>
                    window.open(
                      "https://hub.docker.com/u/ajmalkhanbangash",
                      "_blank"
                    )
                  }
                  className="footer-social-icons-each"
                />
              </li>
            </ul>
          </motion.div>
          <h5>Copyright © Ajmal Khan {currentYear}</h5>
        </div>
      </div>
    </>
  );
}

export default Footer;
