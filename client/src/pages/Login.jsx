// Login.js
import React, { useState } from 'react';
import "./Login.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://referral-system-tqkc.onrender.com/api/user/login', {
        email,
        password,
      }).then((res)=>{
        localStorage.setItem('user', JSON.stringify(res.data.id));
        // console.log('Login response:', response.data);
        console.log(res.data)
        alert("login successful")
        navigate("/")
      })
      
      // Handle successful login, redirect, or state management here
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <>
    <Navbar />
    <div className='container1'>
      <div className='card' >
      <h2 className='card-header'>Please Enter your credentials for Login</h2>
      <form className='form-control'>
          <label className='form-label'>Enter Email</label><br />
          <input 
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> <br />
          <label className='form-label'>Enter Password</label> <br />
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> <br />
          <br />
          <button className='btn-primary' onClick={handleLogin}>Login</button>
          <p className='p-tag'>If you are new here please <a href="/signup">Signup</a> here</p>
      </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Login;






