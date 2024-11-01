import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-wrapper">
          <form>
            <h1>REGISTER</h1>

            <div className="input-box">
              <input placeholder="Enter Full Name" required></input>
            </div>

            <div className="input-box">
              <input placeholder="Enter Branch" required></input>
            </div>

            <div className="input-box">
              <input type="number" placeholder="Enter SRN" required></input>
            </div>

            <div className="input-box">
              <input type="number" placeholder="Enter Year" required></input>
            </div>

            <div className="input-box">
              <input
                type="number"
                placeholder="Enter Semester"
                required
              ></input>
            </div>

            <div className="input-box">
              <input type="e-mail" placeholder="Enter e-mail" required></input>
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Enter Password"
                required
              ></input>
            </div>

            <div className="button-container">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
