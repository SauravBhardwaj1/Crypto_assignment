import React, { useEffect, useState } from 'react'

import Footer from '../components/Footer'
import "./Admin.css"
import Navbar from '../components/Navbar'


const Admin = () => {

  const [users, setUsers] = useState([])
  const adminToken = JSON.parse(localStorage.getItem(("token")))

  const fetchUser = () => {
   
    return fetch(`https://referral-system-tqkc.onrender.com/api/user/getall`,{
      method: "GET",
      headers:{
        "Content-Type":"application/json",
        "Authorization": `Bearer ${adminToken}`
      }
    }).then((res)=>res.json()).then((res)=>{
      console.log(res.users)
      setUsers(res.users)
    }).catch((er)=>{
      console.log(er)
    })
  
};

  useEffect(()=>{
    fetchUser()
  },[]); 


  return (
    <div>
        <Navbar />
        <div className='heading'>
          
            {
              users.map((el)=>{
                return <div className='admin-div'> 
                      <div className='users-div' key={el.id}>
                      <h3>User Name       :- {el.name}</h3>
                      <h3>Country       :- {el.country}</h3>
                      <h3>Amount        :- {el.balance}</h3>
                      <p>Reffered By    :- {el.referredBy}</p>
                      </div>
                </div>
              })
            }
        </div>
        <Footer />
    </div>
  )
}

export default Admin


