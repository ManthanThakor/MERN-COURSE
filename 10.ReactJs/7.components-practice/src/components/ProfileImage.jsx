import React from "react";

const ProfileImage = ({ image }) => {
  return (
    <>
      <img
        className="ellipse-shape-icon"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "rgba(0, 0, 0, 0.5)",
          border: "5px solid #ffffff",
        }}
        alt="icon"
        src={image}
      />
      ;
    </>
  );
};

export default ProfileImage;
