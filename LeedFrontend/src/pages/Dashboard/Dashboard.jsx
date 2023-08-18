import React from 'react';
import styles from '../../pages/Dashboard/Dashboard.css';
import image1 from '../../img/money-bill-solid.svg';
import image2 from '../../img/hand-regular.svg';
import image3 from '../../img/handshake-regular.svg';
import image4 from '../../img/account-svg.svg';
import dashlogo from '../../img/leeds-blue.png';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <img className="dashlogo" src={dashlogo} />
      <div className="dashboard">
        <Link to="/payment" className="dashboard-1">
          <img className="dashboard-2" src={image1} />
          <div className="dashboard-3">Payment</div>
        </Link>
        <Link to="/confirmed" className="dashboard-1">
          <img className="dashboard-2" src={image2} />
          <div className="dashboard-3">Cofirm Payment</div>
        </Link>
        <Link to="/verified" className="dashboard-1">
          <img className="dashboard-2" src={image3} />
          <div className="dashboard-3">Verify Payment</div>
        </Link>
        <Link to="/account" className="dashboard-1">
          <img className="dashboard-2" src={image4} />
          <div className="dashboard-3">Your Account</div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
