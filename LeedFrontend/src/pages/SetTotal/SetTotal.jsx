import React, { useEffect, useState } from 'react';
import styles from '../../pages/SetTotal/SetTotal.css';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const SetTotal = () => {
  const params = useParams();
  const {userId} = params;

  const [user, setUser] = useState({});
  const [account, setAccount] = useState({});
  
  const handleChange = (e) => {
    const { value, name } = e.target

    setAccount((prev) => {
      return {...prev, [name]: value}
    })

  }

  const updateAcct = async() => {
    try {
      const result = await axios.patch(`http://localhost:1515/api/account/${account._id}`, account, {
        headers: {
          'Authorization': `Bearer ${cookies.get('jwt')}`
        }
      })
      console.log(result.data)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  useEffect(() => {
    const fetchData = async() => {
      try {
        console.log(cookies.get('jwt'))
        // const result = await axios.get(`https://leeds.onrender.com/api/users/${userId}`, {
        //   headers: {
        //     'Authorization': `Bearer ${cookies.get('jwt')}`
        //   }
        // })
        const result = await axios.get(`http://localhost:1515/api/users/${userId}`, {
          headers: {
            'Authorization': `Bearer ${cookies.get('jwt')}`
          }
        })
        setUser(result.data.data.user)
        const acct = await axios.get(`http://localhost:1515/api/accounts/${result.data.data.user.accountId}`, {
          headers: {
            'Authorization': `Bearer ${cookies.get('jwt')}`
          }
        })
        setAccount(acct.data.data.account)
        console.log(result.data.data.user, account)
      } catch (err) {
        console.log(err.response)
      }
    }

    fetchData()
  }, [userId]);

  return (
    <div className="settotal-container">
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          Back
        </Link>
        <div className="settotal-input">
          {user.firstname} {user.lastname} <button type='button' onClick={updateAcct}>send</button>
        </div>
      </div>
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          Doge
        </Link>
        <div className="settotal-input">
          <div className="settotal-input1" placeholder="Date" />
          <div className="settotal-input2">${account.doge}</div>
          <input className="settotal-input1" name='doge' onChange={handleChange} placeholder="Set New Amount" />
          
        </div>
      </div>
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          USDT
        </Link>
        <div className="settotal-input">
          <div className="settotal-input1" placeholder="Date" />
          <div className="settotal-input2">${account.usdt}</div>
          <input className="settotal-input1" name='usdt' onChange={handleChange} placeholder="Set New Amount" />
        </div>
      </div>
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          Ethereum
        </Link>
        <div className="settotal-input">
          <div className="settotal-input1" placeholder="Date" />
          <div className="settotal-input2">${account.ethereum}</div>
          <input className="settotal-input1" name='ethereum' onChange={handleChange} placeholder="Set New Amount" />
        </div>
      </div>
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          BnB
        </Link>
        <div className="settotal-input">
          <div className="settotal-input1" placeholder="Date" />
          <div className="settotal-input2">${account.bnb}</div>
          <input className="settotal-input1" name='bnb' onChange={handleChange} placeholder="Set New Amount" />
        </div>
      </div>
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          Litecoin
        </Link>
        <div className="settotal-input">
          <div className="settotal-input1" placeholder="Date" />
          <div className="settotal-input2">${account.litecoin}</div>
          <input className="settotal-input1" name='litecoin' onChange={handleChange} placeholder="Set New Amount" />
        </div>
      </div>
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          bitcoin
        </Link>
        <div className="settotal-input">
          <div className="settotal-input1" placeholder="Date" />
          <div className="settotal-input2">${account.bitcoin}</div>
          <input className="settotal-input1" name='bitcoin' onChange={handleChange} placeholder="Set New Amount" />
        </div>
      </div>
    </div>
  );
};

export default SetTotal;
