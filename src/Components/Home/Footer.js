import "./Footer.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// REACT ICONS
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const [refAbout, inViewAbout] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <motion.h1
            ref={refAbout} // Use refAbout for h1
            initial={{ y: -30, opacity: 0.2 }}
            animate={{
              y: inViewAbout ? 0 : -30,
              opacity: inViewAbout ? 1 : 0.2,
            }}
            transition={{ duration: 1.5 }}
          >
            AJAY
          </motion.h1>
          <motion.div
            ref={refAbout} // Use refAbout for h1
            initial={{ y: -30, opacity: 0.2 }}
            animate={{
              y: inViewAbout ? 0 : -30,
              opacity: inViewAbout ? 1 : 0.2,
            }}
            transition={{ duration: 1.5 }}
          >
            Explore my portfolio to discover my journey, skills, and passion for
            Software and DevOps Engineering. Let's connect and explore
            opportunities together!
          </motion.div>
        </div>
        {/* <div className="footer-services">
          <h4>Services</h4>
          <div>
            <ul>
              <li
                onClick={() =>
                  window.open(
                    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    "_blank"
                  )
                }
              >
                Javascript
              </li>
              <li
                onClick={() => window.open("https://www.python.org", "_blank")}
              >
                Python
              </li>
              <li onClick={() => window.open("https://react.dev/", "_blank")}>
                React.js
              </li>
              <li
                onClick={() =>
                  window.open(
                    "https://docs.djangoproject.com/en/5.0/",
                    "_blank"
                  )
                }
              >
                Django
              </li>
              <li
                onClick={() =>
                  window.open(
                    "https://aws.amazon.com/free/?gclid=CjwKCAiA0bWvBhBjEiwAtEsoW0QqV7BxPhAo7aOfOdy8tzhX3gp6c1-jcbOp0qASEiQqxx3hCJ_hThoCOtoQAvD_BwE&trk=c4f45c53-585c-4b31-8fbf-d39fbcdc603a&sc_channel=ps&ef_id=CjwKCAiA0bWvBhBjEiwAtEsoW0QqV7BxPhAo7aOfOdy8tzhX3gp6c1-jcbOp0qASEiQqxx3hCJ_hThoCOtoQAvD_BwE:G:s&s_kwcid=AL!4422!3!637354294239!e!!g!!aws!19043613274!143453611386",
                    "_blank"
                  )
                }
              >
                AWS
              </li>
              <li onClick={() => window.open("", "_blank")}>Azure</li>
              <li onClick={() => window.open("", "_blank")}>GCP</li>
            </ul>
          </div>
        </div>
        <div className="-footer-blogs">
          <h4>Blogs</h4>
          <div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div> */}
        <motion.div
          className="footer-getintouch"
          ref={refAbout} // Use refAbout for h1
          initial={{ y: -30, opacity: 0.2 }}
          animate={{
            y: inViewAbout ? 0 : -30,
            opacity: inViewAbout ? 1 : 0.2,
          }}
          transition={{ duration: 1.5 }}
        >
          <h4>Get in touch!</h4>
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
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </motion.div>
      </div>
    </>
  );
}

export default Footer;
