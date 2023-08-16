import React from 'react';
import styles from '../../pages/User/User.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async() => {
    try {
      const result = await axios.get(`http://localhost:1515/api/users`)
      console.log(result.data)
      setUsers(result.data)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  fetchData()

  return (
    <div className="user-container">
      <div className="user-header">
        <Link to="/settotal" className="user-name">
          Bola
        </Link>
        <div className="user-input">
          <input className="user-input1" placeholder="Date" />
          <input className="user-input1" placeholder="Currency" />
          <input className="user-input1" placeholder="Amount" />
          <button>send</button>
        </div>
      </div>
    </div>
  );
};

export default User;
