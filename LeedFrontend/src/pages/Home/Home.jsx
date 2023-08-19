import React from 'react';
import styles from '../Home/Home.css';
import leader1 from '../../img/staff-2 (2).jpg';
import leader2 from '../../img/staff-2 (1).jpg';
import leader3 from '../../img/staff-3.jpg';
import logo from '../../img/leeds-blue.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="nav1">
            <img className="home-logo" src={logo} />
          </div>
          <div className="nav4">
            <li className="nav4-li">
              <Link to="/" className="nav4-li-a">
                Home
              </Link>

              <Link to="/contactus" className="nav4-li-a">
                Contact
              </Link>

              <Link to="/login" className="nav4-li-a2">
                LOGIN ACCOUNT
              </Link>
            </li>
          </div>
        </nav>
        <article className="article">
          <div className="article-div">Unlimited earnings in one platform.</div>
          <div className="article-div2">
            Secure And Easy Way <br /> To Invest In Real Time
          </div>
          <div className="article-div3">
            Start trading and making in real dollars from the <br /> most secure
            and easy DFY investment option.
          </div>
          <Link to="/register" className="article-div4">
            SIGN UP
          </Link>
          <Link to="/aboutus" className="article-div5">
            ABOUT US
          </Link>
        </article>
      </header>
      <section className="section">
        <div className="section-div">
          <div className="section-div2">How it Works</div>
          <div className="section-div3">
            Trade the top market coins in simple step by step process.
          </div>
          <div className="section-div4">
            <div className="section-div4-a">
              <div className="section-div4-a1">Create Account</div>
              <div className="section-div4-a2">
                Start by creating an account for yourself. Simply click on sign
                up to create an account
              </div>
            </div>
            <div className="section-div4-b">
              <div className="section-div4-b1">Fund Account</div>
              <div className="section-div4-b2">
                Choose from our available investment plans and fund your account
                in minutes.
              </div>
            </div>
            <div className="section-div4-c">
              <div className="section-div4-c1">Withdraw Profits</div>
              <div className="section-div4-c2">
                Withdraw your profits at anytime
              </div>
            </div>
          </div>
          <div className="section-div5">
            <div className="section-div5-a">Leedsbrokerage has it</div>
            <div className="section-div5-a1">all.</div>
          </div>
          <div className="section-div6">
            From strong quality to high liquidity expressfx as it all.
          </div>
          <Link to="/register" className="section-div7">
            EXPLORE MORE
          </Link>
          <div className="section-div8">Our Global Partners</div>
          <div>
            Expressfx is a world wide crypto trading platform with global
            partners.
          </div>
        </div>
        <div className="section-div-2">
          <div className="section-div-2a">F.A.Q.</div>
          <div className="section-div-2b">
            Here are some frequently asked questions.
          </div>
          <div className="section-div-2c">
            <div className="section-div-2c-1">
              What are the risks and guarantees for our customers?
            </div>
            <div className="section-div-2c-1">
              What is the minimum and maximum amount that I can invest?
            </div>
            <div className="section-div-2c-1">
              When can I withdraw my profits?
            </div>
          </div>
        </div>
        <div className="section-div-3">
          <div className="section-div-3-invest">Investment plans</div>
          <div className="section-div-3a">
            <div className="section-div-3a-1">
              <div className="section-div-3a-1a">SILVER</div>
              <div className="section-div-3a-1b">$250-3000</div>
              <div className="section-div-3a-1c">
                Choose starter plan and start earning
              </div>
              <div className="section-div-3a-1d">10% Daily ROI</div>
              <div className="section-div-3a-1e">7 days payout</div>
              <Link to="/register" className="section-div-3a-1f">
                GET STARTED
              </Link>
            </div>
            <div className="section-div-3a-1">
              <div className="section-div-3a-1a">GOLD</div>
              <div className="section-div-3a-1b">
                $3500-
                <br />
                10000
              </div>
              <div className="section-div-3a-1c">
                Choose the silver plan and start earning
              </div>
              <div className="section-div-3a-1d">20% Daily ROI</div>
              <div className="section-div-3a-1e">6 days payout</div>
              <Link to="/register" className="section-div-3a-1f">
                GET STARTED
              </Link>
            </div>
            <div className="section-div-3a-1">
              <div className="section-div-3a-1a">DIAMOND</div>
              <div className="section-div-3a-1b">
                $10500-
                <br />
                20000
              </div>
              <div className="section-div-3a-1c">
                Choose gold plan and start earning
              </div>
              <div className="section-div-3a-1d">30% Daily ROI</div>
              <div className="section-div-3a-1e">4 days payout</div>
              <Link to="/register" className="section-div-3a-1f">
                GET STARTED
              </Link>
            </div>
            <div className="section-div-3a-1">
              <div className="section-div-3a-1a">PLATINUM</div>
              <div className="section-div-3a-1b">
                $20500 <br /> ABOVE
              </div>
              <div className="section-div-3a-1c">
                Choose starter plan and start earning
              </div>
              <div className="section-div-3a-1d">10% Daily ROI</div>
              <div className="section-div-3a-1e">7 days payout</div>
              <Link to="/register" className="section-div-3a-1f">
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
        <div className="section-div-4">
          <div className="section-div-4a">Meet Our Leadership</div>
          <div className="section-div-4b">
            Meet our leadership. A team of dedicated experts
          </div>
          <div className="section-div-4c">
            <div className="section-div-4c-1">
              <img className="section-div-4c-img" src={leader1} />
              <div className="section-div-4c-2">Andria Walls</div>
              <div>Head Customer Support</div>
            </div>
            <div className="section-div-4c-1">
              <img className="section-div-4c-img" src={leader2} />
              <div className="section-div-4c-2">Taylor Bmford</div>
              <div>Director/Founder</div>
            </div>
            <div className="section-div-4c-1">
              <img className="section-div-4c-img" src={leader3} />
              <div className="section-div-4c-2">Brynlie Elaina</div>
              <div>Staff</div>
            </div>
          </div>
          <div className="section-div-4c-1a">
            <div className="section-div-4c-1a-1">
              Trade with world class experts
            </div>
            <div className="section-div-4c-1a-2">
              <div className="section-div-4c-1a-2a">
                START your trading journey with world class experts.
                Leedsbrokerage trades is here to serve you with the best trading
                services you can imagine. YOUR PROFITS IS OUR PRIORITY.
              </div>
              <Link to="/register" className="section-div-4c-1a-2b">
                SIGN UP NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div id="contact" class="contact-us">
          <div class="contact-div">
            <div class="address-left">
              <h3 class="eight-h1">Email Us</h3>
              <h5>leedsbrokerage@gmail.com</h5>
            </div>
          </div>
          <div class="last">
            <h5 class="h5">&copy; Copyright 2023</h5>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
