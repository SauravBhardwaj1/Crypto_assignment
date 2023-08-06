import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "./Admin.css"


const Admin = () => {

  const [users, setUsers] = useState({})

  const fetchUsers = async()=>{
     try {
        let usersData = await fetch(`https://referral-system-tqkc.onrender.com/api/user/getall`);
        let data = await usersData.json();
        setUsers(data)
      } catch (error) {
        console.log("error ", error);
      }
  }

  useEffect(()=>{
    fetchUsers()
  },[])

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
                users.map((el)=>{
                  return <div key={el.id}>
                    <h3>Country :- {el.country}</h3>
                  <h3>Amount        :- {el.balance}</h3>
                    <p>Reffered By   :- {el.referredBy}</p>
                  </div>
                })
              }
            </div>
        <Footer />
    </div>
  )
}

export default Admin

