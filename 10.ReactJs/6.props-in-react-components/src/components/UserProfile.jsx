import React from "react";
import "animate.css";
import "../style/UserProfile.css";

const UserProfile = (props) => {
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
            <p>{props.Name}</p>
          </div>
        </div>
        <div className="details-one">
          <div>
            <b>{props.Age}</b>:
          </div>
          <div>
            <p>20</p>
          </div>
        </div>
        <div className="details-one">
          <div>
            <b>Email</b>:
          </div>
          <div>
            <p>{props.Email}</p>
          </div>
        </div>
        <div className="details-one">
          <div>
            <b>Address</b>:
          </div>
          <div>
            <p>{props.Address}</p>
          </div>
        </div>
        <div className="details-one">
          <div>
            <b>Hobbies</b>:
          </div>
          <div>
            <p>{props.hobbies}</p>
          </div>
        </div>
        <div className="details-one">
          <div>
            <b>Is Admin</b>:
          </div>
          <div>
            <p>{props.IsAdmin}</p>
          </div>
        </div>
        <div className="details-one">
          <div>
            <b>About</b>:
          </div>
          <div>
            <p>{props.About}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
