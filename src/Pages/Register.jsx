/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [branch, setBranch] = useState("");
  const [srn, setSrn] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    //! NAME VALIDATION
    if (!fullname) {
      validationErrors.fullname = "Name is required";
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(fullname)) {
      validationErrors.fullname = "Name must contain only letters and spaces";
    }

    //! BRANCH
    if (!branch) {
      validationErrors.branch = "Branch is required";
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(branch)) {
      validationErrors.branch = "Invalid";
    }

    //!SRN
    if (!srn) {
      validationErrors.srn = "SRN is required";
    } else if (!/^\d+$/.test(srn)) {
      validationErrors.srn = "SRN should be a number";
    }

    //! YEAR
    if (!year) {
      validationErrors.year = "Year is required";
    } else if (!/^\d+$/.test(year)) {
      validationErrors.year = "Year should be a number";
    }

    //!SEMESTER
    if (!semester) {
      validationErrors.semester = "semester is required";
    } else if (!/^\d+$/.test(semester)) {
      validationErrors.semester = "semester should be a number";
    }

    //!E-MAIl
    if (!email) {
      validationErrors.email = "E-mail is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = "Invalid E-mail";
    }

    //! PASSWORD VALIDATION
    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    //! ERROR VALIDATION
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
    }
    try {
      //! API CALL
      const response = await axios.post("http://localhost:5003/signup", {
        fullname,
        branch,
        srn,
        year,
        semester,
        email,
        password,
      });

      if (response.status === 201) {
        setSuccessMessage("Registration successful!");

        // Redirect to /stdlogin after 2 seconds
        setTimeout(() => {
          navigate("/stdlogin");
        }, 2000);

        //! CLEAR FORM
        setFullname("");
        setBranch("");
        setSrn("");
        setYear("");
        setSemester("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({ api: error.response?.data?.message || "Signup failed" });
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-wrapper">
          <form onSubmit={handleSubmit}>
            <h1>REGISTER</h1>
            {successMessage && <p className="success">{successMessage}</p>}
            {errors.api && <p className="error">{errors.api}</p>}
            <div className="input-box">
              <input
                placeholder="Enter Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              ></input>
              {errors.fullname && <p className="error">{errors.fullname}</p>}
            </div>

            <div className="input-box">
              <input
                placeholder="Enter Branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                required
              ></input>
              {errors.branch && <p className="error">{errors.branch}</p>}
            </div>

            <div className="input-box">
              <input
                type="number"
                placeholder="Enter SRN"
                value={srn}
                onChange={(e) => setSrn(e.target.value)}
                required
              ></input>
              {errors.srn && <p className="error">{errors.srn}</p>}
            </div>

            <div className="input-box">
              <input
                type="number"
                placeholder="Enter Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              ></input>
              {errors.year && <p className="error">{errors.year}</p>}
            </div>

            <div className="input-box">
              <input
                type="number"
                placeholder="Enter Semester"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                required
              ></input>
              {errors.semester && <p className="error">{errors.semester}</p>}
            </div>

            <div className="input-box">
              <input
                type="e-mail"
                placeholder="Enter e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
              {errors.password && <p className="error">{errors.password}</p>}
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
