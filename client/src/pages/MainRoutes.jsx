import React from 'react'
import { Route, Routes,  } from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import Admin from './Admin'
import Signup from './Register'
import UserProfile from './UserProfile'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/login' element={<Login />} />
            {/* <Route path="/user/:id" render={(props) => <UserProfile userId={props.match.params.id} />} /> */}
            <Route path='/signup' element={<Signup />} />
            <Route path='/admin' element={<Admin />} />
        </Routes>
    </div>
  )
}

export default MainRoutes