import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'
import Admin from './Admin'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/admin' element={<Admin />} />
        </Routes>
    </div>
  )
}

export default MainRoutes