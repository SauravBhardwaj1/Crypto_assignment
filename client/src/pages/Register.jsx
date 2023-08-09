// Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [referral, setReferral] = useState('')

  const navigate= useNavigate()


  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://referral-system-tqkc.onrender.com/api/user/create', {
        name,
        password,
        email,
        country,
        referral
      });
      console.log('Signup response:', response.data);
      alert("registered successfully")
      navigate("/login")
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
              value={name}
              onChange={(e) => setUsername(e.target.value)}
            /><br />
            <label className='form-label'>Enter Email</label><br />
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br />
            <label className='form-label'>Enter Password</label><br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br />
            <label className='form-label'>Select country</label><br />
            <select className='country' name='country' value={country}  onChange={(e)=> setCountry(e.target.value)}>
                  <option value="">Country</option>
                  <option value="$">United States</option>
                  <option value="€">European Union</option>
                  <option value="£">United Kingdom</option>
                  <option value="¥">Japan</option>
                  <option value="CHf">Switzerland</option>
                  <option value="AU$">Australia</option>
                  <option value="CA$">Canada</option>
                  <option value="¥">China</option>
                  <option value="₹">India</option>
                  <option value="₽">Russia</option>
                  <option value="₩">South Korea</option>
                  <option value="R$">Brazil</option>
                  <option value="Mex$">Mexico</option>
                  <option value="R">South Africa</option>
                  <option value="₺">Turkey</option>
              </select><br /> <br />
              <label className='form-label'>Enter Referral code</label><br />
            <input
              type="text"
              placeholder="Referral code"
              value={referral}
              onChange={(e) => setReferral(e.target.value)}
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




