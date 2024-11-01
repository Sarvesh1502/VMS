import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./StdLogin.css";
import { FaUser, FaLock } from "react-icons/fa";
const StdLogin = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="wrapper">
          <form>
            <h1>Login</h1>
            <div className="input-box">
              <input type="number" placeholder="Enter SRN" required></input>
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required></input>
              <FaLock className="icon" />
            </div>

            <div className="remember">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>
            <div className="button-container">
              <button type="submit">Login</button>
            </div>
            <div className="register-link">
              <p>
                First time volunteer?{" "}
                <NavLink to="/register"> Register!</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StdLogin;
