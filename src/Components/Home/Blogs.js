import { useEffect, useState } from "react";
import "./Blogs.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Blogs() {
  const [blogposts, setBlogPosts] = useState(false);
  const navigate = useNavigate();
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
      <h1>BLOGS</h1>
      <h3>My Latest Blogs</h3>
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
