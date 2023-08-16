import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {isAuth,}=useContext(AuthContext)

    const location = useLocation();

  return isAuth ? children : alert("please login first"),<Navigate to="/login" state={location.pathname} />
  
}

export default PrivateRoute