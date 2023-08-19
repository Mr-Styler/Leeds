import React, { useEffect, useState } from 'react';
import styles from '../../pages/SetTotal/SetTotal.css';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import dashlogo from '../../img/leeds-blue.png';

import profile from '../../img/staff-3.jpg';

const cookies = new Cookies();

const SetTotal = () => {
  const params = useParams();
  const { userId } = params;

  const [user, setUser] = useState({});
  const [account, setAccount] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;

    setAccount((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const updateAcct = async () => {
    try {
      const result = await axios.patch(
        `http://localhost:1515/api/accounts/${account._id}`,
        account,
        {
          headers: {
            Authorization: `Bearer ${cookies.get('jwt')}`,
          },
        }
      );
      console.log(result.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(cookies.get('jwt'));
        const result = await axios.get(
          `https://leeds.onrender.com/api/users/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${cookies.get('jwt')}`,
            },
          }
        );
        // const result = await axios.get(`http://localhost:1515/api/users/${userId}`, {
        //   headers: {
        //     'Authorization': `Bearer ${cookies.get('jwt')}`
        //   }
        // })
        setUser(result.data.data.user);
        const acct = await axios.get(
          `https://leeds.onrender.com/api/accounts/${result.data.data.user.accountId}`,
          {
            headers: {
              Authorization: `Bearer ${cookies.get('jwt')}`,
            },
          }
        );
        // const acct = await axios.get(`http://localhost:1515/api/accounts/${result.data.data.user.accountId}`, {
        //   headers: {
        //     'Authorization': `Bearer ${cookies.get('jwt')}`
        //   }
        // })
        setAccount(acct.data.data.account);
        console.log(result.data.data.user, account);
      } catch (err) {
        console.log(err.response);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="settotal-container">
      <div className="navheader">
        <div className="nav">
          <img className="dashlogo" src={dashlogo} />
          <div className="dashlogout">Log Out</div>
        </div>
        <div className="dashnav1">
          <div className="dashnav1-name">ADMIN</div>

          <div className="dashnav3">SET USER</div>
        </div>
      </div>
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          Back
        </Link>
        <div className="settotal-input">
          {user.firstname} {user.lastname}{' '}
          <button type="button" onClick={updateAcct}>
            Save
          </button>
        </div>
      </div>
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          Doge
        </Link>
        <div className="settotal-input">
          <div className="settotal-input1" placeholder="Date" />
          <div className="settotal-input2">${account.doge}</div>
          <input
            type="number"
            value={account.doge}
            className="settotal-input1"
            name="doge"
            onChange={handleChange}
            placeholder="Set New Amount"
          />
        </div>
      </div>
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          USDT
        </Link>
        <div className="settotal-input">
          <div className="settotal-input1" placeholder="Date" />
          <div className="settotal-input2">${account.usdt}</div>
          <input
            type="number"
            value={account.usdt}
            className="settotal-input1"
            name="usdt"
            onChange={handleChange}
            placeholder="Set New Amount"
          />
        </div>
      </div>
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          Ethereum
        </Link>
        <div className="settotal-input">
          <div className="settotal-input1" placeholder="Date" />
          <div className="settotal-input2">${account.ethereum}</div>
          <input
            type="number"
            value={account.ethereum}
            className="settotal-input1"
            name="ethereum"
            onChange={handleChange}
            placeholder="Set New Amount"
          />
        </div>
      </div>
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          BnB
        </Link>
        <div className="settotal-input">
          <div className="settotal-input1" placeholder="Date" />
          <div className="settotal-input2">${account.bnb}</div>
          <input
            type="number"
            value={account.bnb}
            className="settotal-input1"
            name="bnb"
            onChange={handleChange}
            placeholder="Set New Amount"
          />
        </div>
      </div>
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          Litecoin
        </Link>
        <div className="settotal-input">
          <div className="settotal-input1" placeholder="Date" />
          <div className="settotal-input2">${account.litecoin}</div>
          <input
            type="number"
            value={account.litecoin}
            className="settotal-input1"
            name="litecoin"
            onChange={handleChange}
            placeholder="Set New Amount"
          />
        </div>
      </div>
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          bitcoin
        </Link>
        <div className="settotal-input">
          <div className="settotal-input1" placeholder="Date" />
          <div className="settotal-input2">${account.bitcoin}</div>
          <input
            type="number"
            value={account.bitcoin}
            className="settotal-input1"
            name="bitcoin"
            onChange={handleChange}
            placeholder="Set New Amount"
          />
        </div>
      </div>
    </div>
  );
};

export default SetTotal;
