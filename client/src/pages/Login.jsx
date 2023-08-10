// Login.js
import React, { useState } from 'react';
import "./Login.css"
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isAuth,LoginUser,LogoutUser}=useContext(AuthContext)
  
  
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://referral-system-tqkc.onrender.com/api/user/login', {
        email,
        password,
      }).then((res)=>{
        // Handle successful login, redirect, or state management here
        localStorage.setItem('user', JSON.stringify(res.data.id));
        localStorage.setItem('token', JSON.stringify(res.data.token));
        console.log(res.data)
        LoginUser()
        alert("login successful")
        navigate("/")
      
      })
         
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  if(isAuth){
    return <Navigate to="/"/>
  }else{
    return (
      <>
      <Navbar />
      <div className='container1'>
        <h1>For Admin Panel Login user email id is <p>admin@gmail.com</p> and password is <p>admin</p></h1>
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
            <h2 className='p-tag'>If you are new here please <a href="/signup">Signup</a> here</h2>
        </form>
        </div>
      </div>
      <Footer />
      </>
    );
  }

  
};

export default Login;






