import React from 'react';
import axios from 'axios';
import logo from '../../img/leeds-blue.png';
import styles from '../../pages/Login/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'universal-cookie'
const cookies = new Cookies();

const Login = () => {
  const navigate = useNavigate();
  const createCookie = (token) => {
    cookies.set('jwt', token, { path: '/', expires: new Date(new Date().getTime() + 24 * 3600 * 1000)})
  }

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target

    setLoginInfo((prev) => {
      return {...prev, [name]: value}
    })

  }

  const fetchData = async() => {
    try {
      const result = await axios.post(`https://leeds.onrender.com/api/users/login`, loginInfo)
      // const result = await axios.post(`http://localhost:1515/api/users/login`, loginInfo)
      console.log(result.data)
      createCookie(result.data.token)
      if (result.data.data.user.role === 'admin') {
        return navigate('/user')
      }
      navigate('/dashboard')
    } catch (err) {
      console.log(err.response.data)
    }
  }

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
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="login-formdiv1">Password</div>
            <input className="login-form-input" placeholder="Enter Password"
            type="password"
              name="password"
              onChange={handleChange}
               />
          </div>
        </div>
        <div className="section">
          <div className="sectiondiv-forward">Forget Password?</div>
        </div>
        <button type='button' onClick={fetchData} className="sectiondiv-signin">
          Sign in
        </button>
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
