import React from 'react';
import styles from '../../pages/AboutUs/AboutUs.css';
import image from '../../img/bitcoin.jpg';
import logo from '../../img/leeds-blue.png';
import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
    <div className="header">
      <header className="container-about">
        <nav className="nav">
          <div className="nav1">
            <img className="home-logo" src={logo} />
          </div>
          <div className="nav4">
            <li className="nav4-li">
              <Link to="/" className="nav4-li-a" href="#">
                Home
              </Link>
              <Link to="/contactus" className="nav4-li-a" href="#">
                Contact
              </Link>

              <Link to="/login" className="nav4-li-a2" href="#">
                LOGIN ACCOUNT
              </Link>
            </li>
          </div>
        </nav>
        <div>
          <div className="about-article">
            <div className="about-article-div">About Us</div>
            <div className="about-article-div2">
              We help you grow your investments
            </div>
            <div className="about-article-div3">
              With a full driving force team of experts, panterascapitals has
              proven that we are
            </div>
            <div className="about-article-div4">
              capable of maximizing the investments of our clients
            </div>
          </div>
        </div>
      </header>

      <div className="container-about-1a">
        <div className="container-about-1a-a">
          <div className="container-about-1a-a1">Create Account</div>
          <div className="container-about-1a-a2">
            Start by creating an account for yourself. Simply click on sign up
            to create an account
          </div>
        </div>
        <div className="container-about-1a-b">
          <div className="container-about-1a-b1">Fund Account</div>
          <div className="container-about-1a-b2">
            Choose from our available investment plans and fund your account in
            minutes.
          </div>
        </div>
        <div className="container-about-1a-c">
          <div className="container-about-1a-c1">Withdraw Profits</div>
          <div className="container-about-1a-c2">
            Withdraw your profits at anytime
          </div>
        </div>
      </div>

      <div className="features">
        <div className="features-main">Our Features</div>
        <div className="features1a">
          <div className="features1">
            <div className="features2">01.</div>
            <div className="features3">Cloud base security</div>
            <div>
              We give you full protection against DDoS attacks, full data
              encryption.
            </div>
          </div>
          <div className="features1">
            <div className="features2">02.</div>
            <div className="features3">Customer support</div>
            <div>We keep an eye on your requests, pains and suggestions.</div>
          </div>
          <div className="features1">
            <div className="features2">02.</div>
            <div className="features3">Customer support</div>
            <div>We keep an eye on your requests, pains and suggestions.</div>
          </div>
          <div className="features1">
            <div className="features2">02.</div>
            <div className="features3">Customer support</div>
            <div>We keep an eye on your requests, pains and suggestions.</div>
          </div>
          <div className="features1">
            <div className="features2">02.</div>
            <div className="features3">Customer support</div>
            <div>We keep an eye on your requests, pains and suggestions.</div>
          </div>
          <div className="features1">
            <div className="features2">02.</div>
            <div className="features3">Customer support</div>
            <div>We keep an eye on your requests, pains and suggestions.</div>
          </div>
        </div>
      </div>
      <div className="about-section">
        <img className="about-section-image" src={image} />
        <div className="about-section1">
          <div className="about-section2">Why Choose Us?</div>
          <div className="about-section3">
            Put us to work. Invest your funds where it's profitable
          </div>
          <div className="about-section4">
            <div className="about-section4a">
              <div className="about-section4b">Easy setup</div>
              <div className="about-section4c">
                Using panterascapitals, you can totally set upp your acount in
                seconds without any hassle. Get started in seconds and enjoy the
                best trading profits.
              </div>
            </div>
            <div className="about-section5">1. Smart trading</div>
            <div className="about-section5">2. Easy withdrawal</div>
            <div className="about-section5">3. Award Winning Support Team</div>
            <div className="about-section5">4. Best ROI service</div>
            <div className="about-section5">5. Experienced Professionals</div>
          </div>
        </div>
      </div>
      <div className="aboutus-last">
        <div className="section-div-4c-1a">
          <div className="section-div-4c-1a-1">
            Trade with world class experts
          </div>
          <div className="section-div-4c-1a-2">
            <div className="section-div-4c-1a-2a">
              START your trading journey with world class experts.
              Panterscapitals trades is here to serve you with the best trading
              services you can imagine. YOUR PROFITS IS OUR PRIORITY.
            </div>
            <Link to="/register" className="section-div-4c-1a-2b">
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </div>
      <footer>
        <div id="contact" class="contact-us">
          <div class="contact-div">
            <div class="address-left">
              <h3 class="eight-h1">Email Us</h3>
              <h5>help@rabboni.com</h5>
              <h5>info@rabboni.com</h5>
            </div>
            <div class="address-right">
              <h3 class="eight-h1">Call Us</h3>
              <h5>+2349030988342</h5>
              <h5>+2349156253293</h5>
              <h5>+2348144135127</h5>
            </div>
            <div class="address">
              <h3 class="eight-h1">Our Address</h3>
              <p class="p8">
                Elzazi complex, Opposite Westharm petrol station along
                gbalajam/Akpajo road, woji ( Odili Road, Port-Harcourt)
              </p>
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
