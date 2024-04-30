// import { useEffect, useState } from "react";
import "./Blogs.css";
// import axios from "axios";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

let blogposts = [
  {
    blog_title: "CAREER COUNSELLING",
    blog_image: "Blog_Images/career.jpeg",
    blog_date: "2023-10-18",
    blog_description:
      "Career counseling involves guiding individuals in exploring, understanding, and making informed decisions about their career paths, taking into account their skills, interests, values, and goals.",
  },
  {
    blog_title: "DeCoupling Architecture",
    blog_image: "Blog_Images/Decoupling.png",
    blog_date: "2023-12-21",
    blog_description:
      "In this blog, we will delve into the concept of decoupled architecture in web applications. Firstly, we'll explore the traditional methods of Software Development Life Cycle (SDLC).",
  },
  {
    blog_title: "PROXY SERVERS",
    blog_image: "Blog_Images/Proxyserver01.jpeg",
    blog_date: "2024-02-13",
    blog_description:
      "We will define and use proxy servers for Software Deployment. How it helps Software Engineers getting their job done for decoupled architecture software pieces.",
  },
  {
    blog_title: "Virtualization and Containerization",
    blog_image: "Blog_Images/vircon02.jpeg",
    blog_date: "2024-04-17",
    blog_description:
      "Explaining the contrast between virtualization and containerization, alongside evaluating the existing Private Virtual Servers (PVS) architecture and weighing the advantages and disadvantages of transitioning to a superior architecture between these two options.",
  },
];
function Blogs() {
  // const [blogposts, setBlogPosts] = useState(false);
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
  // useEffect(() => {
  //   axios
  //     .get("portfolio/blogs/")
  //     .then((res) => {
  //       setBlogPosts(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
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
