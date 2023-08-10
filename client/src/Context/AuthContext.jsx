import React from 'react'
import { useState,createContext } from 'react'


export const AuthContext=createContext();

const AuthContextProvider = ({children}) => {
    const [isAuth,SetAuth]=useState(true);
    const [isAuth21,SetAuth1]=useState(false);

    const LoginUser=()=>{

        SetAuth(true)
        
    }
    const LogoutUser=()=>{

        SetAuth(false)
       
    }


    const LoginUser1=()=>{

        SetAuth1(true)
        
    }
    const LogoutUser1=()=>{

        SetAuth1(false)
       
    }

  return (
   <AuthContext.Provider value={{isAuth,LoginUser,LogoutUser,isAuth21,LoginUser1,LogoutUser1}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthContextProvider