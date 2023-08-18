import React from 'react';
import styles from '../../pages/ContactUs/ContactUs.css';
import contact from '../../img/staff-2 (2).jpg';
import logo from '../../img/leeds-blue.png';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div>
      <header className="container-about">
        <nav className="nav">
          <div className="nav1">
            <img className="home-logo" src={logo} />
          </div>
          <div className="nav4">
            <li className="nav4-li">
              <Link to="/" className="nav4-li-a">
                Home
              </Link>
              <Link to="/aboutus" className="nav4-li-a">
                About
              </Link>

              <Link to="/login" className="nav4-li-a2">
                LOGIN ACCOUNT
              </Link>
            </li>
          </div>
        </nav>
        <div>
          <div className="about-article">
            <div className="about-article-div">Contact Us</div>
            <div className="about-article-div2">
              Contact us for more information and customer support
            </div>
          </div>
        </div>
      </header>
      <div className="contactus">
        <div className="contactus-1">
          <div className="contactus-2">
            Send us a message and get quick response
          </div>
          <img className="contactus-3" src={contact} />
        </div>
        <div className="contactus-4">
          <div className="contactus-5">Get In Touch</div>
          <div className="contactus-6">
            <div className="contactus-7">Reach Us</div>
            <div className="contactus-8">
              500 Terry Francios Street San Francisco, CA 94158
            </div>
            <div className="contactus-9">support@panterascapitals.com</div>
          </div>
        </div>
      </div>
      <div className="contactus-here">
        <div className="contact-session-div-4c-1a">
          <div className="contact-session-div-4c-1a-1">
            Trade with world class experts..
          </div>
          <div className="contact-session-div-4c-1a-2">
            <div className="contact-session-div-4c-1a-2a">
              START your trading journey with world class experts.
              Panterscapitals trades is here to serve you with the best trading
              services you can imagine. YOUR PROFITS IS OUR PRIORITY.
            </div>
            <Link to="/register" className="contact-session-div-4c-1a-2b">
              SIGN UP NOW
            </Link>
          </div>
        </div>
      </div>
      <footer>
        <div id="contact" class="contact-us">
          <div class="contact-div">
            <div class="address-left">
              <h3 class="eight-h1">Email Us</h3>
              <h5>leedsbrokerage@gmail.com</h5>
            </div>
            <div class="address-right">
              <h3 class="eight-h1">Call Us</h3>
              <h5>+1 (678) 632-5339</h5>
            </div>
          </div>
          <div class="last">
            <h5 class="h5">&copy; Copyright 2023 Rabboni Technologies</h5>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
