import { useEffect, useState } from "react";
import "./Blogs.css";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function Blogs() {
  const [blogposts, setBlogPosts] = useState(false);
  const navigate = useNavigate();
  const [refAbout, inViewAbout] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });
  // CONVERTING TITLES INTO HYPHENS
  function convertToSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove non-word characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-") // Replace multiple hyphens with single hyphen
      .trim(); // Trim leading/trailing hyphens
  }
  useEffect(() => {
    axios
      .get("portfolio/blogs/")
      .then((res) => {
        setBlogPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
        BLOGS
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
        "My blogs cover a wide range of topics, spanning from career development
        and counseling to advanced engineering skills, offering insights and
        expertise to help individuals navigate their professional journeys and
        achieve top-level proficiency in their chosen fields."
      </motion.h3>
      <div className="blogs">
        {blogposts &&
          blogposts.results.map((blog, index) => {
            return (
              <div key={index} className="blog-card">
                <img
                  src={blog.blog_image}
                  className="blog-card-img"
                  alt={blog.blog_title}
                ></img>
                <div className="blog-card-date">{blog.blog_date}</div>
                <h3 className="blog-card-title">{blog.blog_title}</h3>
                <div className="blog-card-descrip">{blog.blog_description}</div>
                <h4
                  onClick={() => {
                    navigate(`blogs/${convertToSlug(blog.blog_title)}`, {
                      state: `${blog.blog_title}`,
                    });
                  }}
                  className="blog-card-visit"
                >
                  Visit Blog {">>"}
                </h4>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Blogs;
