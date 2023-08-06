import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div >
                <Link to="/">
                <img className='image' src="https://www.platinx.io/wp-content/uploads/2022/03/logo-new-2.png" alt="" />
                </Link>
            </div>
            <div>
                <Link to="/login">
                    <button className='regButton'>Register</button>
                </Link>
                <Link to="/login">
                    <button className='logButton'>Login</button>
                </Link>
                <Link to="/admin">
                    <button className='logButton'>Admin</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar