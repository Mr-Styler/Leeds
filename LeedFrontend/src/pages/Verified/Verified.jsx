import React, { useEffect, useState } from 'react';
import upload from '../../img/upload-solid.svg';
import image from '../../img/leadership.jpg';
import image2 from '../../img/paper-plane-solid.svg';
import styles from '../../pages/Verified/Verified.css';
import dashlogo from '../../img/leeds-blue.png';
import axios from 'axios';
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const Verified = () => {
  const uploadButton = document.getElementById('upload-button');
  const chosenImage = document.getElementById('chosen-image');
  const fileName = document.getElementById('file-name');

  const [image, setImage] = useState({
    image: ''
  });
  const formData = new FormData();

  const handleChange = (e) => {

    const { name } = e.target
    
    if (e.target.name === 'image') {
      setImage((prev) => {
        return {...prev, [name]: e.target.files[0]}
      }) 
    }
  }

  console.log(image)

    const fetchData = async() => {
      formData.append("image", image.image);
      try {
        console.log(formData, cookies.get('jwt'))
        const result = await axios.post(`https://leeds.onrender.com/api/transactions`, formData, {
          headers: {
            'Authorization': `Bearer ${cookies.get('jwt')}`
          }
        })
        console.log(result.data)
      } catch (err) {
        console.log(err.response.data)
      }
    }

  return (
    <div className="body">
      <div className="container">
        <img className="dashlogo" src={dashlogo} />
        <figure className="image-container">
          <img id="chosen-image" />
          <figcaption id="file-name"></figcaption>
        </figure>
        <div className="send-input">
          <input hidden type="file" id="upload-button" name="image" accept="image/*" onChange={handleChange} />
          <label className="upload-top" for="upload-button">
            <img className="upload" src={upload} /> &nbsp; Choose A Photo
          </label>{' '}
          <img className="send" onClick={fetchData} src={image2} />
        </div>
      </div>
    </div>
  );
};

export default Verified;
