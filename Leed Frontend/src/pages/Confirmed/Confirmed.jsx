import React, { useEffect, useState } from 'react';
import styles from '../../pages/Confirmed/Confirmed.css';
import dashlogo from '../../img/leeds-blue.png';
import axios from 'axios';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const Confirmed = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        console.log(cookies.get('jwt'))
        const result = await axios.get(`http://localhost:1515/api/transactions/me`, {
          headers: {
            'Authorization': `Bearer ${cookies.get('jwt')}`
          }
        })
        console.log(result.data.data.transactions)
        setTransactions(result.data.data.transactions)
      } catch (err) {
        console.log(err.response.data)
      }
    }

    fetchData()
  }, []);


  
  return (
    <div className="confirmed-container">
      <img className="dashlogo" src={dashlogo} />
      {
          transactions.map(transaction => (
            <div key={transaction._id} className="cofirmed-header">
              <div className="confirmed-1">
                <div className="confirmed-1a">Time</div>
                <div className="confirmed-1b">20-1-22</div>
              </div>
              <div className="confirmed-1">
                <div className="confirmed-1a">{transaction.currency}</div>
                <div className="confirmed-1b">{transaction.amount}</div>
              </div>
              <div className="confirmed-3">
                <div className="confirmed-3a">{transaction.status}</div>
              </div>
            </div>      
          ))
        }
      
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
