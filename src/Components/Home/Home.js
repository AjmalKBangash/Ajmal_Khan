import "./Home.css";
import Navbar from "./Navbar";

// REACT ICONS
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import SkillsTool from "./SkillsTool";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div class="background-img">
        <div className="background-img-clr">
          <div className="background-img-div">
            <img src="images/Ajay.png" className="profile-img "></img>
            <h1 className=" center-items">AJMAL KHAN</h1>
            <div className=" center-items">
              I am a Software and DevOps Engineer
            </div>
            <div className="social-icons">
              <FaLinkedin className="social-icons-each" />
              <FaInstagram
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/ajmalbangash/",
                    "_blank"
                  )
                }
                className="social-icons-each"
              />
              <FaGithub className="social-icons-each" />
              <FaDocker className="social-icons-each" />
            </div>
            <div>
              <span className="two-btns-on-back-img">Download CV</span>
              <span className="two-btns-on-back-img">Contact Me</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container">
        <div className="about">
          <h1 className=" ">ABOUT</h1>
          <h3>Introduction to my Development Experience and Skills</h3>
          <br />
          <p>
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
            Azure and delving into the world of DevOps tools and technologies,
            like Jenkins and Terraform etc.
          </p>
          <br />
          <p>
            Explore my portfolio to discover the projects that showcase my
            commitment to delivering innovative solutions and my journey towards
            mastering cutting-edge technologies in the ever-evolving landscape
            of software and DevOps Engineering.
          </p>
        </div>
        <div className="skillful-tools">
          <SkillsTool data={{ skill: "Django", per: "70%" }} />
          <div>
            <div className="skillful-tools-name-per">
              <span>React</span>
              <span>80%</span>
            </div>
            <div className="skillful-tools-grey">
              <div className="skillful-tools-orange"></div>
            </div>
          </div>
          <div>
            <div className="skillful-tools-name-per">
              <span>Django</span>
              <span>90%</span>
            </div>
            <div className="skillful-tools-grey">
              <div className="skillful-tools-orange"></div>
            </div>
          </div>
          <div>
            <div className="skillful-tools-name-per">
              <span>React</span>
              <span>80%</span>
            </div>
            <div className="skillful-tools-grey">
              <div className="skillful-tools-orange"></div>
            </div>
          </div>
          <div>
            <div className="skillful-tools-name-per">
              <span>Django</span>
              <span>90%</span>
            </div>
            <div className="skillful-tools-grey">
              <div className="skillful-tools-orange"></div>
            </div>
          </div>
          <div>
            <div className="skillful-tools-name-per">
              <span>React</span>
              <span>80%</span>
            </div>
            <div className="skillful-tools-grey">
              <div className="skillful-tools-orange"></div>
            </div>
          </div>
        </div>
        <div onClick={() => navigate("sign-up/")}>
          Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn
          vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc
          vcbcbnvcbvcbv bvc bvcnvnb Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv
          bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn
          vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnb Salam vbvcbvc
          cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv
          bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv
          bvc bvcnvnb Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn
          vbvcbn vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv
          cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnb Salam vbvcbvc cvbnvbvcbvc
          bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv bcvbvc nvbc
          nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnb
          Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn
          vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc
          vcbcbnvcbvcbv bvc bvcnvnb Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv
          bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn
          vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnb Salam vbvcbvc
          cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv
          bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv
          bvc bvcnvnb Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn
          vbvcbn vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv
          cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnb Salam vbvcbvc cvbnvbvcbvc
          bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv bcvbvc nvbc
          nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnb
          Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn
          vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc
          vcbcbnvcbvcbv bvc bvcnvnb Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv
          bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn
          vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnb Salam vbvcbvc
          cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv
          bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv
          bvc bvcnvnb Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn
          vbvcbn vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv
          cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnb Salam vbvcbvc cvbnvbvcbvc
          bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv bcvbvc nvbc
          nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnb
          Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn
          vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc
          vcbcbnvcbvcbv bvc bvcnvnb Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv
          bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn
          vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnb Salam vbvcbvc
          cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv
          bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv
          bvc bvcnvnb Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn
          vbvcbn vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv
          cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnb Salam vbvcbvc cvbnvbvcbvc
          bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv bcvbvc nvbc
          nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnb
          Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn
          vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc
          vcbcbnvcbvcbv bvc bvcnvnb Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv
          bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn
          vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnbSalam vbvcbvc
          cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv
          bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv
          bvc bvcnvnbSalam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn
          vbvcbn vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv
          cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnb Salam vbvcbvc cvbnvbvcbvc
          bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv bcvbvc nvbc
          nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc
          bvcnvnbSalam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn
          vbvcbn vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv
          cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnbSalam vbvcbvc cvbnvbvcbvc
          bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv bcvbvc nvbc
          nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc
          bvcnvnbSalam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn
          vbvcbn vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv
          cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnbSalam vbvcbvc cvbnvbvcbvc
          bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv bcvbvc nvbc
          nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc
          bvcnvnbSalam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn
          vbvcbn vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv
          cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnbSalam vbvcbvc cvbnvbvcbvc
          bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn vcbnvc bvcbnv bcvbvc nvbc
          nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc vcbcbnvcbvcbv bvc bvcnvnb
          Salam vbvcbvc cvbnvbvcbvc bncvbnv bvcbncv bvcnb cbnv cvbn vbvcbn
          vcbnvc bvcbnv bcvbvc nvbc nbvcbnvbcvbcbn vbvcbvcnbvbv cvbcbnvcbvcbvc
          vcbcbnvcbvcbv bvc bvcnvnb
        </div>
      </div>
    </>
  );
}

export default Home;
