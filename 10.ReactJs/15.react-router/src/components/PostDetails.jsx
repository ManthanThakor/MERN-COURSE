import React from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  return (
    <>
      <h1>Post id : {postId}</h1>
    </>
  );
};

export default PostDetails;
