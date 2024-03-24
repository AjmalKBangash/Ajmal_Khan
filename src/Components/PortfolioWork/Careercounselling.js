import "./Careercounselling.css";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { useNavigate } from "react-router-dom";
function Careercounselling() {
  const navigate = useNavigate();
  return (
    <>
      <div className="blog-background">
        <Navbar />
        <div className="home-container" style={{ width: "80%" }}>
          <div className="blog">
            <h1 style={{ textAlign: "center" }}>CAREER COUNSELLING</h1>
            <img
              src="/images/career01-m.jpeg"
              alt="career counselling"
              className="blog-img"
            />
            <br />
            <h3 style={{ textAlign: "center" }}>
              Why Counseling is Key in Career Development ?
            </h3>
            <h3>
              Counseling plays a more crucial role than attending university
              classes or taking online courses when dealing with distractions. A
              questions like,
            </h3>
            <br />
            <div>What to choose ?</div>
            <div>What to study ?</div>
            <div>How to choose ?</div>
            <div>How to study ?</div>
            <div>From where to begin ?</div>
            <div>
              From whom and where should i get my counselling and help ?
            </div>
            <div>How to stay motivated during the journey of years ?</div>
            <br />
            {/* <p>
            To answer all these questions and fully understand the journey to
            become a good Engineer and expert you should first make develop your
            career path for a specific field to become Engineer otherwise you
            will be studying a lot what you will not experience in your later
            life and you will again waste a lot of time dedication and practice
            to become expert in the engineering and path way of a modern field
            choosen by you.
          </p> */}
            <p>
              To comprehensively address these inquiries and grasp the path
              toward becoming a proficient engineer, it is crucial to initially
              craft a career path tailored to a specific engineering discipline.
              Otherwise, you may find yourself dedicating significant time to
              studying topics that may not align with your future experiences.
              This could lead to wasted time, dedication, and practice in
              becoming an expert in your chosen modern engineering field's.
            </p>
            <br />
            <br />
            <h4>Introduction to career counselling</h4>
            <p>
              Career counseling is like having a guide to help you figure out
              what job or career is best for you. It's about exploring your
              interests, skills, and goals, and then finding the right path to
              reach them. Think of it as a map to help you navigate the world of
              work and make important decisions about your future.
            </p>
            <br />
            <br />
            <br />
            <h4>Understanding Your Options:</h4>
            <p>
              One of the primary roles of career counseling is to help
              individuals understand their options. Whether you're contemplating
              what field to enter, which degree to pursue, or what job
              opportunities align with your skills and interests, a career
              counselor can provide valuable insights. Through assessments,
              exploration exercises, and in-depth discussions, you'll gain
              clarity on the myriad paths available to you.
            </p>
            <br />
            <h4>Making Informed Decisions:</h4>
            <p>
              "What to choose? What to study?" These are common questions that
              plague individuals navigating their career paths. Career
              counseling equips you with the tools to make informed decisions.
              By evaluating factors such as your strengths, values, personality,
              and career goals, you'll be empowered to choose a path that
              resonates with your aspirations and aligns with your unique
              attributes.
            </p>
            <br />
            <h4>Crafting a Strategic Plan:</h4>
            <p>
              Once you've identified your career goals, the next step is to
              devise a strategic plan to achieve them. From selecting the right
              educational programs to mapping out your career trajectory, a
              career counselor can provide invaluable guidance. Together, you'll
              outline actionable steps, set achievable milestones, and develop
              strategies to overcome potential obstacles along the way.
            </p>
            <br />
            <h4>Seeking Guidance:</h4>
            <p>
              "From whom and where should I get my counseling and help?" When
              seeking career counseling, it's essential to find a qualified
              professional or senior from your department who understands your
              needs and aspirations. Whether you opt for counseling services
              offered by educational institutions, career centers, private
              practitioners, or online platforms, ensure that you choose a
              reputable source with a track record of helping individuals
              succeed in their careers.
            </p>
            <br />
            <h4>Staying Motivated:</h4>
            <img
              src="/images/career02-m.jpeg"
              alt="career counselling"
              className="blog-img"
            />
            <p>
              "How to stay motivated during the journey of years?" Sustaining
              motivation throughout your career journey is paramount to
              achieving success. Career counseling can provide the support and
              encouragement you need to stay focused and resilient amidst
              challenges. By setting realistic goals, celebrating milestones,
              and cultivating a growth mindset, you'll remain inspired to pursue
              your dreams with vigor and determination.
            </p>
            <br />
            <h4>Professional Stories</h4>
            <p>
              Many talented professionals and engineers, particularly in the
              field of IT, often lack clear career guidance, leading to
              distractions and frustration. Without a clear understanding of
              their goals, they may invest time and effort in pursuits that are
              not aligned with their career aspirations, resulting in wasted
              opportunities. Effective career counseling is essential for skill
              development in any field. Sometimes, students may pursue knowledge
              that is not directly relevant to their chosen field, although it
              may contribute to their overall knowledge base.
            </p>
            <br />
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Hence, It is highly recommended to
              seek advice and guidance before making any career decisions.
              Consult with professors at your college or university, as well as
              senior members of your department who have already navigated these
              steps. Their experiences can provide valuable insights and help
              you chart a pathway tailored to your own needs and aspirations. By
              leveraging their expertise, you can shape a brighter future filled
              with opportunities.""
            </p>{" "}
            <br />
            <div className="contacting-me-div">
              If you are curious and frustrated in your field, Do{" "}
              <span
                className="contact-me-in-blog"
                onClick={() => navigate("/")}
              >
                contact me
              </span>{" "}
              for a better{" "}
              <span className="career-coun-word">
                Career Guidance and Counselling
              </span>{" "}
              with full of opportunities
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Careercounselling;
