import React from 'react';
import Home from './pages/Home/Home';
import { AboutUs } from './pages/AboutUs/AboutUs';
import Login from './pages/Login/Login';
import ContactUs from './pages/ContactUs/ContactUs';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Account from './pages/Account/Account';
import Verified from './pages/Verified/Verified';
import Payment from './pages/Payment/Payment';
import Confirmed from './pages/Confirmed/Confirmed';
import User from './pages/User/User';
import SetTotal from './pages/SetTotal/SetTotal';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/settotal" element={<SetTotal />} />
      <Route path="/confirmed" element={<Confirmed />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/account" element={<Account />} />
      <Route path="/verified" element={<Verified />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
