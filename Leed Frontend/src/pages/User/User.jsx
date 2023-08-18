import React from 'react';
import styles from '../../pages/User/User.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const User = () => {
  const [users, setUsers] = useState([]);
  let count = 0

  const handleChange = (e) => {
    const { className, value, name } = e.target

    console.log()

    setUsers((prev) => {
      console.log(prev)
      return {...prev[className.split(' ')[1]], [name]: value}
    })

  }

  const updateUser = async(index) => {
    try {
      console.log(cookies.get('jwt'))
      const result = await axios.patch(`http://localhost:1515/api/transactions`, users[index], {
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
        const result = await axios.get(`http://localhost:1515/api/users`, {
          headers: {
            'Authorization': `Bearer ${cookies.get('jwt')}`
          }
        })
        console.log(result.data.data.users)
        setUsers(result.data.data.users)
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
                <input className={`user-input1 ${count}`} onChange={handleChange} placeholder="Date" />
                <input className={`user-input1 ${count}`} onChange={handleChange} placeholder="Currency" />
                <input className={`user-input1 ${count}`} onChange={handleChange} placeholder="Amount" />
                <button type='button' onClick={updateUser(count)}>send</button>
              </div>
            </div>
          ))
        }
      
    </div>
  );
};

export default User;
