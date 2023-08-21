import React, { useEffect, useState } from 'react';
import styles from '../../pages/Confirmed/Confirmed.css';
import dashlogo from '../../img/leeds-blue.png';
import axios from 'axios';
import profile from '../../img/staff-3.jpg';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Confirmed = () => {
  const [transactions, setTransactions] = useState([]);

  const logout = async() => {
    // destroy cookie  in browser
    const result = await axios.get(
          `https://leeds.onrender.com/api/users/logout`,
          {
            headers: {
              Authorization: `Bearer ${cookies.get('jwt')}`,
            },
          }
        );
        // const result = await axios.get(`http://localhost:1515/api/users/logout`, {
        //   headers: {
        //     'Authorization': `Bearer ${cookies.get('jwt')}`
        //   }
        // })
        if (result.data.status === 'success') {
          cookies.remove('jwt');
        }
        console.log(result.data.message)
    // destroy token in server
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(cookies.get('jwt'));
        const result = await axios.get(
          `https://leeds.onrender.com/api/transactions/me`,
          {
            headers: {
              Authorization: `Bearer ${cookies.get('jwt')}`,
            },
          }
        );
        // const result = await axios.get(`http://localhost:1515/api/transactions/me`, {
        //   headers: {
        //     'Authorization': `Bearer ${cookies.get('jwt')}`
        //   }
        // })
        console.log(result.data.data.transactions);
        setTransactions(result.data.data.transactions);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="confirmed-container">
      <div className="comnav-header">
        <div className="comnav">
          <img className="dashlogo" src={dashlogo} />
          {(cookies.get('jwt')) ? (
              <div className="dashlogout" onClick={logout}>Log Out</div>
            ) : (
              <div className=""></div>
            )}

        </div>
        <div className="dashnav1">
          <img className="dashnav2" src={profile} />
          <div className="dashnav3">HISTORY</div>
        </div>
      </div>

      {transactions.map((transaction) => (
        <div key={transaction._id} className="cofirmed-header">
          <div className="confirmed-1">
            <div className="confirmed-1a">Time</div>
            <div className="confirmed-1b">{transaction.time}</div>
          </div>
          <div className="confirmed-1">
            <div className="confirmed-1a">{transaction.currency}</div>
            <div className="confirmed-1b">{transaction.amount}</div>
          </div>
          <div className="confirmed-3">
            <div className="confirmed-3a">{transaction.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Confirmed;
