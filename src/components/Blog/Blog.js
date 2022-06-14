import React from "react";
import "./Blog.css";

const Blog = (props) => {
  const { author, body, date, image, title } = props.blog;

  return (
    <div className="blog">
      <div className="blog-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-details">
        <h2>{title}</h2>
        <p>
          by <span className="author">{author}</span> |{" "}
          <span className="date">{date}</span>
        </p>
        <p>{body}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Blog;
