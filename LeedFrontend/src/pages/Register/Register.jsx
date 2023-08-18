import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';import logo from '../../img/leeds-blue.png';
import styles from '../../pages/Register/Register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target

    setSignupInfo((prev) => {
      return {...prev, [name]: value}
    })

  }

  const fetchData = async() => {
    try {
      console.log(signupInfo)
      const result = await axios.post(`https://leeds.onrender.com/api/users/signup`, signupInfo)
      console.log(result.data)
      navigate('/login')
    } catch (err) {
      console.log(err.response.data)
    }
  }
  // useEffect(() => {
    
  // }, []);
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
              type="email"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
            />
          </div>
          <div>
            <div className="login-formdiv1">Password</div>
            <input className="login-form-input"
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
            />
          </div>
          <div>
            <div className="login-formdiv1">Confirm Password</div>
            <input
              className="login-form-input"
              type="password"
              name="confirmPassword"
              placeholder="Re-enter Password"
              onChange={handleChange}
              />
          </div>
          <div>
            <div className="login-formdiv1">Firstname</div>
            <input 
              className="login-form-input"
              placeholder="Enter Firstname"
              name="firstname"
              onChange={handleChange}
              />
          </div>
          <div>
            <div className="login-formdiv1">Lastname</div>
            <input
             className="login-form-input"
             placeholder="Enter Lastname"
             name="lastname"
             onChange={handleChange}
             />
          </div>
        </div>

        <button type='button' onClick={fetchData} className="sectiondiv-signin">
          Sign up
        </button>
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
