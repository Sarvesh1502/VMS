import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import { FaUser, FaLock } from "react-icons/fa";
const Login = () => {
  return (
    <div className='login-container'>
     <div className='wrapper'>
       <form>
         <h1>Login</h1>
         <div className="input-box">
           <input type ="email" placeholder='Enter e-mail' required></input>
           <FaUser className='icon' />
         </div>
         <div className="input-box">
           <input type ="password" placeholder='Password' required></input>
           <FaLock className='icon'/>
         </div>

         <div className="remember">
           <label><input type = "checkbox" />Remember me</label>
         </div>
         <button type = "submit">Login</button>
         <div className="register-link">
           <p>First time volunteer? <a href='#'> Register!</a></p>
         </div>
       </form>
     </div>
     </div>
  )
}

export default Login