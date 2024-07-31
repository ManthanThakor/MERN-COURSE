import React from "react";
import "animate.css";
import "../style/UserProfile.css";

const UserProfile = () => {
  return (
    <>
      <h1 className="title animate__animated animate__fadeInDown">
        UserProfile
      </h1>
      <p className="dis animate__animated animate__fadeInUp">
        This is a user profile page
      </p>
      <div className="details-part animate__animated animate__fadeIn">
        <b>Name</b>: <p>Devil</p>
        <b>Age</b>: <p>30</p>
        <b>Email</b>: <p>devil@example.com</p>
        <b>Address</b>: <p>123 Main St, Anytown, USA</p>
        <b>Hobbies</b>: <p>Reading, Gaming, Painting</p>
        <b>Is Admin</b>: <p>True</p>
        <b>About</b>:
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
          assumenda autem amet consequatur molestias. Consequatur ea nobis
          libero eum earum dolorum aperiam veritatis, labore delectus est? Sed
          quae distinctio laborum.
        </p>
      </div>
    </>
  );
};

export default UserProfile;
