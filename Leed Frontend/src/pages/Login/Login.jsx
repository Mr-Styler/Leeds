import React from 'react';
import logo from '../../img/leeds-blue.png';
import styles from '../../pages/Login/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-containerdiv">
        <img className="register-logo" src={logo} />
      </div>
      <form className="login-form">
        <div className="login-formdiv">User Login</div>
        <div>
          <div>
            <div className="login-formdiv1">Your Email</div>
            <input
              className="login-form-input"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <div className="login-formdiv1">Password</div>
            <input className="login-form-input" placeholder="Enter Password" />
          </div>
        </div>
        <div className="section">
          <div className="sectiondiv">
            <div className="sectiondiv1"></div>
            <div className="sectiondiv2">Remember me</div>
          </div>
          <div className="sectiondiv-forward">Forget Password?</div>
        </div>
        <Link to="/dashboard" className="sectiondiv-signin">
          Sign in
        </Link>
        <div className="main-article">
          <div className="articlediv">Don't have an account?</div>
          <Link to="/register" className="articlediv1">
            Sign Up
          </Link>
        </div>
        <div className="footer">
          <div className="footerdiv">&copy; Copyright 2023</div>
          <div className="footerdiv1">panterascapitals</div>{' '}
        </div>
        <div>
          <div className="footerdiv2">All Rights Reserved</div>
        </div>
      </form>
    </div>
  );
};

export default Login;
