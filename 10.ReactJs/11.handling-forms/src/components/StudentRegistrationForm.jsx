import React, { useState } from "react";
import "./StudentRegistrationForm.css";
import { FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";

const StudentRegistrationForm = () => {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [course, setCourse] = useState("Science");
  const [consent, setConsent] = useState(false);

  const handleNameChange = (e) => {
    setStudentName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setStudentAge(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleConsentChange = (e) => {
    setConsent(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      studentName,
      studentAge,
      course,
      consent,
    });
  };

  const handleReset = () => {
    setStudentName("");
    setStudentAge("");
    setCourse("Science");
    setConsent(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Student Registration Form</h1>
        <div className="form-data-name">
          <label>Name:</label>
          <input type="text" value={studentName} onChange={handleNameChange} />
        </div>
        <div className="form-data-age">
          <label>Age:</label>
          <input type="number" value={studentAge} onChange={handleAgeChange} />
        </div>
        <div className="form-data-course">
          <label>Course:</label>
          <select value={course} onChange={handleCourseChange}>
            <option value="Science">Science</option>
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="History">History</option>
            <option value="Geography">Geography</option>
          </select>
        </div>
        <div className="form-data-consent">
          <label>
            <input
              type="checkbox"
              checked={consent}
              onChange={handleConsentChange}
            />
            Consent
          </label>
        </div>
        <button type="submit">Submit</button>
        <button type="reset" onClick={handleReset}>
          Reset
        </button>

        <div className="social-login">
          <FaGoogle className="social-icon" />
          <FaTwitter className="social-icon" />
          <FaGithub className="social-icon" />
        </div>
        <span className="text-for-social-login">
          Login with social accounts
        </span>
        <footer>
          <p>
            Don't you have an account? <a href="/signup">Sign up</a>
          </p>
        </footer>
      </form>
    </>
  );
};

export default StudentRegistrationForm;
