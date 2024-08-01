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
        <div className="details-one">
          <div>
            <b>Name</b>:
          </div>
          <div>
            <p>Devil</p>
          </div>
        </div>
        <div className="details-one">
          <div>
            <b>Age</b>:
          </div>
          <div>
            <p>30</p>
          </div>
        </div>
        <div className="details-one">
          <div>
            <b>Email</b>:
          </div>
          <div>
            <p>devil@example.com</p>
          </div>
        </div>
        <div className="details-one">
          <div>
            <b>Address</b>:
          </div>
          <div>
            <p>123 Main St, Anytown, USA</p>
          </div>
        </div>
        <div className="details-one">
          <div>
            <b>Hobbies</b>:
          </div>
          <div>
            <p>Reading, Gaming, Painting</p>
          </div>
        </div>
        <div className="details-one">
          <div>
            <b>Is Admin</b>:
          </div>
          <div>
            <p>True</p>
          </div>
        </div>
        <div className="details-one">
          <div>
            <b>About</b>:
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              assumenda autem amet consequatur molestias. Consequatur ea nobis
              libero eum earum dolorum aperiam veritatis, labore delectus est?
              Sed quae distinctio laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
