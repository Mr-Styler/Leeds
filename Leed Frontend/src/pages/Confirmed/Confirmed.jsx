import React from 'react';
import styles from '../../pages/Confirmed/Confirmed.css';
import dashlogo from '../../img/leeds-blue.png';

const Confirmed = () => {
  return (
    <div className="confirmed-container">
      <img className="dashlogo" src={dashlogo} />
      <div className="cofirmed-header">
        <div className="confirmed-1">
          <div className="confirmed-1a">Time</div>
          <div className="confirmed-1b">20-1-22</div>
        </div>
        <div className="confirmed-1">
          <div className="confirmed-1a">Bitcoin</div>
          <div className="confirmed-1b">58888.585777.4444</div>
        </div>
        <div className="confirmed-3">
          <div className="confirmed-3a">Successful</div>
        </div>
      </div>
      <div className="cofirmed-header">
        <div className="confirmed-1">
          <div className="confirmed-1a">Time</div>
          <div className="confirmed-1b">20-1-22</div>
        </div>
        <div className="confirmed-1">
          <div className="confirmed-1a">Bitcoin</div>
          <div className="confirmed-1b">58888.585777.4444</div>
        </div>
        <div className="confirmed-3">
          <div className="confirmed-3a">Successful</div>
        </div>
      </div>
    </div>
  );
};

export default Confirmed;
