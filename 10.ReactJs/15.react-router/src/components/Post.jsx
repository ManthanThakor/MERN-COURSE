import React from "react";
import posts from "../utils/data";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <>
      <h1>Post</h1>
      {posts.map((post) => (
        <Link to={`/posts/${post.id}`} key={post.id}>
          <div>
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.img} />
            <p>{post.content}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Post;
