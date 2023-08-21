import React, { useEffect, useState } from 'react';
import styles from '../../pages/Dashboard/Dashboard.css';
import image1 from '../../img/money-bill-solid.svg';
import image2 from '../../img/hand-regular.svg';
import image3 from '../../img/handshake-regular.svg';
import image4 from '../../img/account-svg.svg';
import dashlogo from '../../img/leeds-blue.png';
import { Link, useNavigate } from 'react-router-dom';
import profile from '../../img/profile.png';

import Cookies from 'universal-cookie';
import axios from 'axios';
const cookies = new Cookies();

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const logout = async() => {
    // destroy cookie  in browser
    const result = await axios.get(
          `https://leeds.onrender.com/api/users/logout`,
          {
            headers: {
              Authorization: `Bearer ${cookies.get('jwt')}`,
            },
          }
        );
        // const result = await axios.get(`http://localhost:1515/api/users/logout`, {
        //   headers: {
        //     'Authorization': `Bearer ${cookies.get('jwt')}`
        //   }
        // })
        if (result.data.status === 'success') {
          cookies.remove('jwt');
          navigate('/')
        }
        console.log(result.data.message)
    // destroy token in server
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(cookies.get('jwt'));
        const result = await axios.get(`https://leeds.onrender.com/api/users/me`, {
          headers: {
            Authorization: `Bearer ${cookies.get('jwt')}`,
          },
        });
        // const result = await axios.get(`http://localhost:1515/api/users/me`, {
        //   headers: {
        //     'Authorization': `Bearer ${cookies.get('jwt')}`
        //   }
        // })
        console.log(result.data.data.user);
        setUser(result.data.data.user);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="navheader">
        <div className="nav">
          <img className="dashlogo" src={dashlogo} />
          {(cookies.get('jwt')) ? (
              <div className="dashlogout" onClick={logout}>Log Out</div>
            ) : (
              <div className=""></div>
            )}
        </div>
        <div className="dashnav1">
            {
              (user === {}) ? (
                <div className="dashnav1-name">Welcome, {user.firstname}</div>
              ) : (
                <div className=""></div>
              )
            }
          <img className="dashnav2" src={profile} />
          <div className="dashnav3">HOME</div>
        </div>
      </div>
      <div className="dashboard">
        <Link to="/payment" className="dashboard-1">
          <div className="dashboard-3">Deposit</div>
        </Link>
        <Link to="/confirmed" className="dashboard-1">
          <div className="dashboard-3">Profit History</div>
        </Link>
        <Link to="/verified" className="dashboard-1">
          <div className="dashboard-3">Request</div>
        </Link>
        <Link to="/account" className="dashboard-1">
          <div className="dashboard-3">Your Account</div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
