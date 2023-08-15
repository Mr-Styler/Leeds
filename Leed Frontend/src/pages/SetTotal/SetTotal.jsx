import React from 'react';
import styles from '../../pages/SetTotal/SetTotal.css';
import { Link } from 'react-router-dom';

const SetTotal = () => {
  return (
    <div className="settotal-container">
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          Bola
        </Link>
        <div className="settotal-input">
          <div className="settotal-input1" placeholder="Date" />
          <div className="settotal-input2">$5000.000.0</div>
          <input className="settotal-input1" placeholder="Set New Amount" />
          <button>send</button>
        </div>
      </div>
    </div>
  );
};

export default SetTotal;
