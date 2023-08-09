// UserProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState([]);
  const [id, setId] = useState("")

  
 console.log(id)


  const fetchUser = async (id) => {
    try {
      const response = await axios.get(`https://referral-system-tqkc.onrender.com/api/user/get/${id}`);
      setUser(response.data.data);
      setId(JSON.parse(localStorage.getItem('user')));
      console.log(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  console.log(user)

  useEffect(() => {
    
    fetchUser(id);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
        {
           user.map((el)=>{
            return <div key={el.id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
           }) 
        }
      
      {/* Display other user data as needed */}
    </div>
  );
};

export default UserProfile;
