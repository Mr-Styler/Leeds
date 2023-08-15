import React from 'react';
import upload from '../../img/upload-solid.svg';
import image from '../../img/leadership.jpg';
import image2 from '../../img/paper-plane-solid.svg';
import styles from '../../pages/Verified/Verified.css';
import dashlogo from '../../img/leeds-blue.png';

const Verified = () => {
  const uploadButton = document.getElementById('upload-button');
  const chosenImage = document.getElementById('chosen-image');
  const fileName = document.getElementById('file-name');

  return (
    <div className="body">
      <div className="container">
        <img className="dashlogo" src={dashlogo} />
        <figure className="image-container">
          <img id="chosen-image" />
          <figcaption id="file-name"></figcaption>
        </figure>
        <div className="send-input">
          <input type="file" id="upload-button" accept="image/*" />
          <label className="upload-top" for="upload-button">
            <img className="upload" src={upload} /> &nbsp; Choose A Photo
          </label>{' '}
          <img className="send" src={image2} />
        </div>
      </div>
    </div>
  );
};

export default Verified;
