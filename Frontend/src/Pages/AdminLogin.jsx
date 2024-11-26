/* eslint-disable no-unused-vars */
import React from "react";
import "./AdminLogin.css";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!email) {
      validationErrors.email = "E-mail is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = "Enter valid E-mail";
    }

    if (!password) {
      validationErrors.password = "Enter Password";
    } else if (password.length < 6) {
      validationErrors.password = "Invalid Password";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("form submitted : ", { email, password });
    }
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="email"
                placeholder="Enter e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
              <FaUser className="icon" />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
              <FaLock className="icon" />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="button-container">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
