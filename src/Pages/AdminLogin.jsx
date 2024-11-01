import React from "react";
import "./AdminLogin.css";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
const AdminLogin = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="wrapper">
          <form>
            <h1>Login</h1>
            <div className="input-box">
              <input type="email" placeholder="Enter e-mail" required></input>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
