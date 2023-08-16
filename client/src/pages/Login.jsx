// Login.js
import React, { useState } from 'react';
import "./Login.css"
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
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
        console.log(res.data.url)
            // Check device configuration here
    // const isMobile = /* perform the check for mobile device */;
    // const isTablet = /* perform the check for tablet device */;

    // if (isMobile) {
    //   // Redirect for mobile devices
    //   // navigate(mobileRedirectUrl);
    //   navigate(url); // Redirect as per your logic
    // } else if (isTablet) {
    //   // Redirect for tablet devices
    //   // navigate(tabletRedirectUrl);
    //   navigate(url); // Redirect as per your logic
    // } else {
    //   // Redirect for other devices (desktop, etc.)
    //   // navigate(desktopRedirectUrl);
    //   navigate(url); // Redirect as per your logic
    // }
        LoginUser()
        // Get the URL you want to redirect to after login.
        alert("login successful")
      // const redirectUrl = res.data.url;

      // // Perform the redirect.
      // navigate(redirectUrl);
        
        window.location.replace(res.data.url)
      
      })
         
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  // if(isAuth){
  //   return <Navigate to="/"/>
  // }else{
    return (
      <>
      <Navbar />
      <div className='container1'>
        <h1>For Admin Panel login email id is <p>admin@gmail.com</p> and password is <p>admin</p></h1>
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
  // }

  
};

export default Login;


