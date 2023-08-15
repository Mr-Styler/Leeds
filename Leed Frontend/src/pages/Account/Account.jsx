import React from 'react';
import styles from '../../pages/Account/Account.css';
import dashlogo from '../../img/leeds-blue.png';

const Account = () => {
  return (
    <div className="account-dashboard">
      <img className="dashlogo" src={dashlogo} />
      <div className="account">
        <div className="account1">
          <div className="account1a">DOGE</div>
          <div className="account1b">300</div>
        </div>
        <div className="account1">
          <div className="account1a">USDT TRC 20</div>
          <div className="account1b">300</div>
        </div>
        <div className="account1">
          <div className="account1a">ETHEREUM</div>
          <div className="account1b">300</div>
        </div>
        <div className="account1">
          <div className="account1a">BNB</div>
          <div className="account1b">300</div>
        </div>
        <div className="account1">
          <div className="account1a">LITECOIN</div>
          <div className="account1b">300</div>
        </div>
        <div className="account1">
          <div className="account1a">BITCOIN</div>
          <div className="account1b">300</div>
        </div>
      </div>
    </div>
  );
};

export default Account;
