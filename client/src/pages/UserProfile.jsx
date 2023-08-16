// UserProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./UserProfile.css"

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [id, setId] = useState(JSON.parse(localStorage.getItem("user")))

  
//  console.log(id)


  const fetchUser =  (id) => {
   
      return axios.get(`https://referral-system-tqkc.onrender.com/api/user/get/${id}`).then((res)=>{
        // console.log(res.data.user)
        setUser(res.data.user)
      }).catch((er)=>{
        console.log(er)
      })
     
    
  };

  // console.log(user)

  useEffect(() => {
    
    fetchUser(id);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
        
             <div className='details-users' key={user._id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>country: {user.country}</p>
                <p>balance: {user.balance}</p>
                <p>Referral Code: {user.referralCode}</p>
                <p>Role: {user.role}</p>
            </div>
           

    </div>
  );
};

export default UserProfile;
