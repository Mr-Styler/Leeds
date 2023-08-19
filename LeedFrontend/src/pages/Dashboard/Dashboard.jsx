import React from 'react';
import styles from '../../pages/Dashboard/Dashboard.css';
import image1 from '../../img/money-bill-solid.svg';
import image2 from '../../img/hand-regular.svg';
import image3 from '../../img/handshake-regular.svg';
import image4 from '../../img/account-svg.svg';
import dashlogo from '../../img/leeds-blue.png';
import { Link } from 'react-router-dom';
import profile from '../../img/staff-3.jpg';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="navheader">
        <div className="nav">
          <img className="dashlogo" src={dashlogo} />
          <div className="dashlogout">Log Out</div>
        </div>
        <div className="dashnav1">
          <div className="dashnav1-name">Welcome, EMMANUEL</div>
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
