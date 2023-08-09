import React, { useEffect, useState } from 'react'

import Footer from '../components/Footer'
import "./Admin.css"
import Navbar from '../components/Navbar'
import axios from 'axios'



const Admin = () => {

  const [users, setUsers] = useState([])
  const yourAuthToken = localStorage.getItem("user")

  useEffect(() => {
    // Fetch user data from the backend API
    axios.get('https://referral-system-tqkc.onrender.com/api/user/getall', {
  headers: {
    Authorization: `Bearer ${yourAuthToken}`
  }
})
.then(response => {
  // Handle the successful response
})
.catch(error => {
  if (error.response) {
    console.log('Response error:', error.response);
  } else if (error.request) {
    console.log('Request error:', error.request);
  } else {
    console.log('Error:', error.message);
  }
});
  }, []); 

  console.log(users)
  return (
    <div>
        <Navbar />
        <div className='heading'>This is Admin Page</div>
        <div className='account-div'>
              <h2 className='heading'>User account details</h2>
              {/* <div className='details'>
                <h3>Account Number :- xxxxxxxxx2345</h3>
                <h3>Amount        :- xxx000</h3>
                 <p>Reffered By   :- Saurav</p>
              </div> */}
              {
                users.map((el)=>(
                  <div key={el.id}>
                    <h3>Country       :- {el.country}</h3>
                    <h3>Amount        :- {el.balance}</h3>
                    <p>Reffered By    :- {el.referredBy}</p>
                  </div>
                ))
                   
              }
              
            </div>
        <Footer />
    </div>
  )
}

export default Admin


