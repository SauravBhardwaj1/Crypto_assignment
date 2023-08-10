
import React, { useContext } from 'react'
import {AiFillShopping,AiOutlineUser } from "react-icons/ai";
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';


const Navbar = () => {
 
    const {isAuth,LogoutUser}=useContext(AuthContext)
    

  return (
    <div>
        <div className='navbar'>
            <div >
                <Link to="/">
                <img className='image' src="https://www.platinx.io/wp-content/uploads/2022/03/logo-new-2.png" alt="" />
                </Link>
            </div>
            <div>
                <Link to="/signup">
                    <button className='regButton'>Register</button>
                </Link>
                
                <Link  className="logButton" to="/login"><button onClick={LogoutUser}>{isAuth?"Logout":<AiOutlineUser />}</button></Link>

                <Link to="/admin">
                    <button className='logButton'>Admin</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar