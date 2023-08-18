// Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    country:'',
    referralCode: '',
  });
  const navigate= useNavigate()

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };


  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://referral-system-tqkc.onrender.com/api/user/create',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('User registered successfully');
        navigate("/login")
      } else {
        console.error('Registration failed');
      }
      
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <>
    <Navbar />
    <div className='container1'>
      <div className='reg-card'>
        <form className='form-control'>
            <h2 className='card-header'>New User Signup</h2><br />
            <label className='form-label'>Enter Name</label><br />
            <input
              type="text"
              placeholder="Username"
              value={formData.name}
              onChange={handleInputChange}
              required
            /><br />
            <label className='form-label'>Enter Email</label><br />
            <input
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            /><br />
            <label className='form-label'>Enter Password</label><br />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            /><br />
            <label className='form-label'>Select country</label><br />
            <select className='country' name='country' value={formData.country}  onChange={handleInputChange} required>
                  <option value="">Country</option>
                  <option value="US">United States</option>
                  <option value="EU">European Union</option>
                  <option value="UK">United Kingdom</option>
                  <option value="JAPAN">Japan</option>
                  <option value="SWITZERLAND">Switzerland</option>
                  <option value="AUS">Australia</option>
                  <option value="CANADA">Canada</option>
                  <option value="CHINA">China</option>
                  <option value="IND">India</option>
                  <option value="RUSSIA">Russia</option>
                  <option value="SK">South Korea</option>
                  <option value="BRAZIL">Brazil</option>
                  <option value="MEXICO">Mexico</option>
                  <option value="SA">South Africa</option>
                  <option value="TURKEY">Turkey</option>
              </select><br /> <br />
              <label className='form-label'>Enter Referral code</label><br />
            <input
              type="text"
              placeholder="Referral code"
              value={formData.referralCode}
              onChange={handleInputChange}
              required
            /><br />
            <button className='btn-primary' onClick={handleSignup}>Signup</button>
          </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Signup;


