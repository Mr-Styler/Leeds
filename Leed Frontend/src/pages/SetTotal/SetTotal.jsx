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
  
  const handleChange = (e) => {
    const { value, name } = e.target

    setUser((prev) => {
      return {...prev, [name]: value}
    })

  }

  const updateUser = async() => {
    try {
      const result = await axios.patch(`http://localhost:1515/api/users/${userId}`, user, {
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
        const result = await axios.get(`http://localhost:1515/api/users/${userId}`, {
          headers: {
            'Authorization': `Bearer ${cookies.get('jwt')}`
          }
        })
        console.log(result.data.data.user)
        setUser(result.data.data.user)
      } catch (err) {
        console.log(err.response.data)
      }
    }

    fetchData()
  }, [userId]);

  return (
    <div className="settotal-container">
      <div className="settotal-header">
        <Link to="/user" className="settotal-name">
          {user.firstname}
        </Link>
        <div className="settotal-input">
          <div className="settotal-input1" placeholder="Date" />
          <div className="settotal-input2">${user.acct_bal}</div>
          <input className="settotal-input1" name='acct_bal' onChange={handleChange} placeholder="Set New Amount" />
          <button type='button' onClick={updateUser}>send</button>
        </div>
      </div>
    </div>
  );
};

export default SetTotal;
