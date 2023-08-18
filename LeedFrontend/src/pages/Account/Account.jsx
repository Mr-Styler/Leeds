import React, { useEffect, useState } from 'react';
import styles from '../../pages/Account/Account.css';
import dashlogo from '../../img/leeds-blue.png';
import axios from 'axios';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const Account = () => {
  // Get user's account
  const [account, setAccount] = useState({});

  useEffect(() => {
    const fetchData = async() => {
      try {
        console.log(cookies.get('jwt'))
        const result = await axios.get(`https://leeds.onrender.com/api/accounts/me`, {
          headers: {
            'Authorization': `Bearer ${cookies.get('jwt')}`
          }
        })
        // const result = await axios.get(`http://localhost:1515/api/accounts/me`, {
        //   headers: {
        //     'Authorization': `Bearer ${cookies.get('jwt')}`
        //   }
        // })
        console.log(result.data.data.account)
        setAccount(result.data.data.account)
      } catch (err) {
        console.log(err.response.data)
      }
    }

    fetchData()
  }, []);

  
  return (
    <div className="account-dashboard">
      <img className="dashlogo" src={dashlogo} />
      <div className="account">
        <div className="account1">
          <div className="account1a">DOGE</div>
          <div className="account1b">{account.doge}</div>
        </div>
        <div className="account1">
          <div className="account1a">USDT TRC 20</div>
          <div className="account1b">{account.usdt}</div>
        </div>
        <div className="account1">
          <div className="account1a">ETHEREUM</div>
          <div className="account1b">{account.ethereum}</div>
        </div>
        <div className="account1">
          <div className="account1a">BNB</div>
          <div className="account1b">{account.bnb}</div>
        </div>
        <div className="account1">
          <div className="account1a">LITECOIN</div>
          <div className="account1b">{account.litecoin}</div>
        </div>
        <div className="account1">
          <div className="account1a">BITCOIN</div>
          <div className="account1b">{account.bitcoin}</div>
        </div>
      </div>
    </div>
  );
};

export default Account;
