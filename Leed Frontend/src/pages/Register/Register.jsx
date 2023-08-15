import React from 'react';
import logo from '../../img/leeds-blue.png';
import styles from '../../pages/Register/Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-container">
      <div className="login-containerdiv">
        <img className="register-logo" src={logo} />
      </div>
      <form className="login-form">
        <div className="login-formdiv">Register</div>
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
          <div>
            <div className="login-formdiv1">Confirm Password</div>
            <input
              className="login-form-input"
              placeholder="Re-enter Password"
            />
          </div>
          <div>
            <div className="login-formdiv1">Firstname</div>
            <input className="login-form-input" placeholder="Enter Firstname" />
          </div>
          <div>
            <div className="login-formdiv1">Lastname</div>
            <input className="login-form-input" placeholder="Enter Lastname" />
          </div>
        </div>

        <Link to="/login" className="sectiondiv-signin">
          Sign up
        </Link>
        <div className="main-article">
          <div className="articlediv">Don't have an account?</div>
          <Link to="/login" className="articlediv1">
            Login
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

export default Register;
