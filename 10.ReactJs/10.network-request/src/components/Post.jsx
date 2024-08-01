import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Post.css";

const URL = "https://jsonplaceholder.typicode.com/posts";
const placeholderImage =
  "https://i.pinimg.com/originals/f5/22/be/f522bec617497a43cabb94accdd2367b.jpg";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(URL);
      setPosts(response.data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="main-title">Welcome to the Blog</div>
      <div className="main-description">
        Discover the latest posts and updates
      </div>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error-message">Error: {error}</div>
      ) : (
        <div className="card-section">
          <ul>
            {posts.map((post) => (
              <li key={post.id} className="post-card">
                <div className="post-image">
                  <img src={placeholderImage} alt="Post" />
                </div>
                <div className="post-title">
                  <h3>{post.title}</h3>
                </div>
                <div className="post-body">
                  <p>{post.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="extra-section">
        <h2>About Us</h2>
        <p>We are dedicated to providing the best content for our readers.</p>
      </div>
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: contact@blog.com</p>
        <p>Phone: +1234567890</p>
      </div>
    </>
  );
};

export default Post;
