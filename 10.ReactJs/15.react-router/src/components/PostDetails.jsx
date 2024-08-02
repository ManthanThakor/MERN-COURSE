import React from "react";
import { useParams } from "react-router-dom";
import posts from "../utils/data";

const PostDetails = () => {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === parseInt(postId));
  return (
    <>
      <h1>Post id : {postId}</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <h3>{post.author}</h3>
    </>
  );
};

export default PostDetails;
