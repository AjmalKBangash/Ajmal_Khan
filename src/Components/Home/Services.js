import "./Services.css";
import {
  SiDjango,
  SiReact,
  SiNginx,
  SiPython,
  SiJavascript,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import axios from "axios";

function Services() {
  // const [services, setServices] = useState(false);
  const [refH1, inViewH1] = useInView({
    threshold: 0.2,
  });

  const [refH3, inViewH3] = useInView({
    threshold: 0.2,
  });
  const [refCard, inViewCard] = useInView({
    threshold: 0.1,
  });
  const [refCard2, inViewCard2] = useInView({
    threshold: 0.1,
  });
  const [refCard3, inViewCard3] = useInView({
    threshold: 0.1,
  });
  const [refCard4, inViewCard4] = useInView({
    threshold: 0.1,
  });
  const [refCard5, inViewCard5] = useInView({
    threshold: 0.1,
  });
  const [refCard6, inViewCard6] = useInView({
    threshold: 0.1,
  });
  const [refCard7, inViewCard7] = useInView({
    threshold: 0.1,
  });
  const [refCard8, inViewCard8] = useInView({
    threshold: 0.1,
  });
  // FETCHING CARDS INFO FROM BACKEND
  // useEffect(() => {
  //   axios
  //     .get("portfolio/services")
  //     .then((res) => {
  //       setServices(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div className="services">
      <motion.h1
        className=""
        ref={refH1} // Assign the ref to h1
        initial={{ y: -30, opacity: 0.2 }}
        animate={{
          y: inViewH1 ? 0 : -30,
          opacity: inViewH1 ? 1 : 0.2,
        }}
        transition={{ duration: 1.5 }}
      >
        SERVICES
      </motion.h1>
      <motion.h3
        ref={refH3} // Assign the ref to h3
        initial={{ y: -30, opacity: 0.2 }}
        animate={{
          y: inViewH3 ? 0 : -30,
          opacity: inViewH3 ? 1 : 0.2,
        }}
        transition={{ duration: 1.5 }}
      >
        My Exceptional and Premium Services
      </motion.h3>
      {/* {services &&
        services.results.map((service, index) => {
          return (
            <div className="services-top">
            </div>
          );
        })} */}
      <div className="cards-top">
        <motion.div
          className="services-card"
          ref={refCard}
          initial={{ x: -30, opacity: 0.2 }}
          animate={{
            x: inViewCard ? 0 : -30,
            opacity: inViewCard ? 1 : 0.2,
          }}
          transition={{ duration: 1.5 }}
        >
          <SiDjango
            className="services-icon"
            //   style={{ color: "#092E20", border: "3px solid #092E20" }}
          />
          <h2>Django</h2>
          <p>
            My proficiency and experties in django extends to implementing
            efficient backend business logic, RESTful APIs, and database
            management within the Django framework. With a strong foundation in
            Django's architecture, I excel in delivering high-quality,
            maintainable code that aligns with industry best practices
          </p>
        </motion.div>
        <motion.div
          className="services-card"
          ref={refCard2}
          initial={{ x: -30, opacity: 0.2 }}
          animate={{
            x: inViewCard2 ? 0 : -30,
            opacity: inViewCard2 ? 1 : 0.2,
          }}
          transition={{ duration: 1.5 }}
        >
          <SiReact
            className="services-icon"
            //   style={{ color: "#092E20", border: "3px solid #092E20" }}
          />
          <h2>React</h2>
          <p>
            I am Proficient in React, a powerful JavaScript UI library, I am
            specialed in developing seamless and responsive user interfaces.
            Leveraging React's component-based architecture, I excel in creating
            dynamic and efficient web applications, ensuring an optimal user
            experience with a keen eye for UI/UX design principles.
          </p>
        </motion.div>
        <motion.div
          className="services-card"
          ref={refCard3}
          initial={{ x: -30, opacity: 0.2 }}
          animate={{
            x: inViewCard3 ? 0 : -30,
            opacity: inViewCard3 ? 1 : 0.2,
          }}
          transition={{ duration: 1.5 }}
        >
          <SiNginx className="services-icon" />
          <h2>Nginx</h2>
          <p>
            Skilled in Nginx, I excel in configuring robust web servers,
            optimizing performance, and ensuring secure, efficient content
            delivery. Proficient in load balancing, reverse proxy setups, and
            SSL/TLS implementation, I enhance web infrastructure for seamless
            user experiences.
          </p>
        </motion.div>
        <motion.div
          className="services-card"
          ref={refCard4}
          initial={{ x: -30, opacity: 0.2 }}
          animate={{
            x: inViewCard4 ? 0 : -30,
            opacity: inViewCard4 ? 1 : 0.2,
          }}
          transition={{ duration: 1.5 }}
        >
          <SiJavascript className="services-icon" />
          <h2>Javascript</h2>
          <p>
            Skilled in Nginx, I excel in configuring robust web servers,
            optimizing performance, and ensuring secure, efficient content
            delivery. Proficient in load balancing, reverse proxy setups, and
            SSL/TLS implementation, I enhance web infrastructure for seamless
            user experiences.
          </p>
        </motion.div>
        <motion.div
          className="services-card"
          ref={refCard5}
          initial={{ x: -30, opacity: 0.2 }}
          animate={{
            x: inViewCard5 ? 0 : -30,
            opacity: inViewCard5 ? 1 : 0.2,
          }}
          transition={{ duration: 1.5 }}
        >
          <SiPython className="services-icon" />
          <h2>Python</h2>
          <p>
            Skilled in Nginx, I excel in configuring robust web servers,
            optimizing performance, and ensuring secure, efficient content
            delivery. Proficient in load balancing, reverse proxy setups, and
            SSL/TLS implementation, I enhance web infrastructure for seamless
            user experiences.
          </p>
        </motion.div>
        <motion.div
          className="services-card"
          ref={refCard6}
          initial={{ x: -30, opacity: 0.2 }}
          animate={{
            x: inViewCard6 ? 0 : -30,
            opacity: inViewCard6 ? 1 : 0.2,
          }}
          transition={{ duration: 1.5 }}
        >
          <SiNginx
            className="services-icon"
            //   style={{ color: "#092E20", border: "3px solid #092E20" }}
          />
          <h2>Nginx</h2>
          <p>
            Skilled in Nginx, I excel in configuring robust web servers,
            optimizing performance, and ensuring secure, efficient content
            delivery. Proficient in load balancing, reverse proxy setups, and
            SSL/TLS implementation, I enhance web infrastructure for seamless
            user experiences.
          </p>
        </motion.div>
        <motion.div
          className="services-card"
          ref={refCard7}
          initial={{ x: -30, opacity: 0.2 }}
          animate={{
            x: inViewCard7 ? 0 : -30,
            opacity: inViewCard7 ? 1 : 0.2,
          }}
          transition={{ duration: 1.5 }}
        >
          <SiNginx
            className="services-icon"
            //   style={{ color: "#092E20", border: "3px solid #092E20" }}
          />
          <h2>Nginx</h2>
          <p>
            Skilled in Nginx, I excel in configuring robust web servers,
            optimizing performance, and ensuring secure, efficient content
            delivery. Proficient in load balancing, reverse proxy setups, and
            SSL/TLS implementation, I enhance web infrastructure for seamless
            user experiences.
          </p>
        </motion.div>
        <motion.div
          className="services-card"
          ref={refCard8}
          initial={{ x: -30, opacity: 0.2 }}
          animate={{
            x: inViewCard8 ? 0 : -30,
            opacity: inViewCard8 ? 1 : 0.2,
          }}
          transition={{ duration: 1.5 }}
        >
          <SiNginx
            className="services-icon"
            //   style={{ color: "#092E20", border: "3px solid #092E20" }}
          />
          <h2>Nginx</h2>
          <p>
            Skilled in Nginx, I excel in configuring robust web servers,
            optimizing performance, and ensuring secure, efficient content
            delivery. Proficient in load balancing, reverse proxy setups, and
            SSL/TLS implementation, I enhance web infrastructure for seamless
            user experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
