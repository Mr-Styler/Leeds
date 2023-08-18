import React from 'react';
import styles from '../../pages/User/User.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const User = () => {
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  let count = 0

  const handleChange = (e) => {
    const { className, value, name } = e.target

    console.log(className)

    setTransactions((prev) => {
      // return {...prev[className], [name]: value}
    })

  }

  const confirmTrans = async(id) => {
    try {
      console.log(cookies.get('jwt'))
      // const result = await axios.patch(`https://leeds.onrender.com/api/transactions`, { status: 'successful}, {
      //   headers: {
      //     'Authorization': `Bearer ${cookies.get('jwt')}`
      //   }
      // })
      const result = await axios.patch(`http://localhost:1515/api/transactions`, { status: 'successful'}, {
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
        // const result = await axios.get(`https://leeds.onrender.com/api/users`, {
        //   headers: {
        //     'Authorization': `Bearer ${cookies.get('jwt')}`
        //   }
        // })
        const result = await axios.get(`http://localhost:1515/api/users`, {
          headers: {
            'Authorization': `Bearer ${cookies.get('jwt')}`
          }
        })
        console.log(result.data.data.users)
        setUsers(result.data.data.users)
        const res = await axios.get(`http://localhost:1515/api/transactions/pending`, {
          headers: {
            'Authorization': `Bearer ${cookies.get('jwt')}`
          },
        })
        console.log(res.data.data)
        setTransactions(res.data.data.transactions)
      } catch (err) {
        console.log(err.response.data)
      }
    }

    fetchData()
  }, []);

  return (
    <div className="user-container">
        {
          users.map(user => (
            
            <div key={count++} className="user-header">
              <Link to={`/${user._id}/settotal`} className="user-name">
                {user.firstname}
              </Link>
              <div className="user-input">
                {
                  transactions.map(transaction => (
                    (transaction.userId === user._id) ? (
                      <div className="">
                        <input type="text" className={transaction._id} onChange={handleChange} name="currency" id="" placeholder='currency' />
                        <input type="date" className={transaction._id} onChange={handleChange} name="time" id="" placeholder='date'/>
                        <input type="number" className={transaction._id} onChange={handleChange} name="amount" id="" placeholder='amount'/>
                        <input type="hidden" className={transaction._id} onChange={handleChange} name="_id" id="" value={transaction._id} placeholder='amount'/>
                        <button type='button' onClick={confirmTrans}>Confirm</button>
                      </div>
                    ) : (
                      <div className=""></div>
                    )
                  ))
                }
              </div>
            </div>
          ))
        }
      
    </div>
  );
};

export default User;
