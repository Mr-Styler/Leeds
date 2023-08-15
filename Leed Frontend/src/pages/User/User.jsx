import React from 'react';
import styles from '../../pages/User/User.css';
import { Link } from 'react-router-dom';

const User = () => {
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
