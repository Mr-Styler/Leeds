import React from 'react';
import styles from '../../pages/User/User.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import dashlogo from '../../img/leeds-blue.png';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

const User = () => {
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  let count = 0;

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


  const handleChange = (e) => {
    const { className, value, name } = e.target;
    const newState = transactions.map((obj) => {
      if (obj._id === className) {
        return { ...obj, [name]: value };
      }
      return obj;
    });

    console.log(newState);

    setTransactions(newState);
    console.log(className, transactions);
  };

  const confirmTrans = async (id) => {
    try {
      console.log(cookies.get('jwt'));
      const index = transactions.findIndex(
        (el) => el._id === id.target.className
      );
      let updatedTransaction = transactions[index];
      updatedTransaction.status = 'succeessul';
      console.log(updatedTransaction);

      const result = await axios.patch(
        `https://leeds.onrender.com/api/transactions/${updatedTransaction._id}`,
        updatedTransaction,
        {
          headers: {
            Authorization: `Bearer ${cookies.get('jwt')}`,
          },
        }
      );
      // const result = await axios.patch(`http://localhost:1515/api/transactions/${updatedTransaction._id}`, updatedTransaction, {
      //   headers: {
      //     'Authorization': `Bearer ${cookies.get('jwt')}`
      //   }
      // })
      console.log(result.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(cookies.get('jwt'));
        const result = await axios.get(`https://leeds.onrender.com/api/users`, {
          headers: {
            Authorization: `Bearer ${cookies.get('jwt')}`,
          },
        });
        // const result = await axios.get(`http://localhost:1515/api/users`, {
        //   headers: {
        //     'Authorization': `Bearer ${cookies.get('jwt')}`
        //   }
        // })
        console.log(result.data.data.users);
        setUsers(result.data.data.users);
        const res = await axios.get(
          `https://leeds.onrender.com/api/transactions/pending`,
          {
            headers: {
              Authorization: `Bearer ${cookies.get('jwt')}`,
            },
          }
        );
        // const res = await axios.get(`http://localhost:1515/api/transactions/pending`, {
        //   headers: {
        //     'Authorization': `Bearer ${cookies.get('jwt')}`
        //   },
        // })
        console.log(res.data.data);
        setTransactions(res.data.data.transactions);
      } catch (err) {
        console.log(err.response.data);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-container">
      <div className="navheader">
      <div className="nav">
          <img className="dashlogo" src={dashlogo} />
          {(cookies.get('jwt')) ? (
              <div className="dashlogout" onClick={logout}>Log Out</div>
            ) : (
              <div className=""></div>
            )}
        </div>
        <div className="dashnav1">
          <div className="dashnav1-name">ADMIN</div>
          <div className="dashnav3">USERS</div>
        </div>
      </div>
      {users.map((user) => (
        <div key={count++} className="user-header">
          <Link to={`/${user._id}/settotal`} className="user-name">
            {user.firstname}
          </Link>
          <div className="">
            {transactions.map((transaction) =>
              transaction.userId === user._id ? (
              <div className="user-input">
                <div className="user-main-input">
                  <input
                    type="text"
                    onChange={handleChange}
                    name="currency"
                    id=""
                    placeholder="currency"
                    className="in"
                  />

                  <input
                    type="number"
                    onChange={handleChange}
                    name="amount"
                    id=""
                    placeholder="amount"
                    className="in"
                  />
                  <button type="button" onClick={confirmTrans}>
                    Confirm
                  </button>
                </div>
              </div>
              ) : (
                <div className=""></div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
