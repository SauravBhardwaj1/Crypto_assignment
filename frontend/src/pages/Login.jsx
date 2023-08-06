
import React from "react";
import  { useState } from "react";
import "./Login.css";
import axios from "axios"
import { useDispatch, useSelector} from "react-redux"
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginfaliure } from "../redux/action";


const baseUrl = "http://localhost"

const signupInitialState = {
  name:"",
  email:"",
  password:"",
  role:null
}

const loginInitialState ={
  email:"",
  password:"",
  role:null
}

function Login() {

   const [signup,setSignup] = useState(true)
   const [login,setLogin] = useState(false)
   const [SignupData , setSignupData] = useState(signupInitialState)
   const [LoginData , setLoginData] = useState(loginInitialState)
   const dispatch = useDispatch()
   const navigate = useNavigate()


   const isAuth = useSelector((store) =>store.authReducer)

   console.log(isAuth,"******")
    

   const handleloginSwitch = () =>{
         setSignup(true)
         setLogin(false)
   }

   const handleSignupSwitch = () =>{
    setLogin(true)
    setSignup(false)
   }


   const handleSignup = (e) =>{
        e.preventDefault()
        SignupData.role && axios.post(`${baseUrl}users/register`,SignupData)
       .then((res) =>{
        toast.success("Registered Successfully !")
      })
       .catch((err) =>{
        toast.error("Failed, try again")
      })
   }


   const hanldeChangeSignup = (e) =>{
     const {value,name} = e.target
      setSignupData({...SignupData,[name]:value})
   }


   const handleChangeLogin = (e) =>{
    const {value,name} = e.target
    setLoginData({...LoginData,[name]:value})
   }


   const handleLogin = async(e) =>{
    e.preventDefault()

    LoginData.role && axios.post(`${baseUrl}users/login`,LoginData)
    .then((res) =>{
      toast.success("Logged Successfully !")
      dispatch(loginSuccess(res.data))
      LoginData.role === "User" ? navigate(`/`):navigate(`/admin`);
    })
    .catch((err) =>{
      toast.error("Failed, try again")
      dispatch(loginfaliure())
    })
   }
  


  return (
    
    <div id="credential-main">
    <Toaster/>
      {/* <--------------------------Sign Up---------------------------> */}
      <div hidden={signup}>
        <div className="main-signup">
          <div className="signup">
            <div>
               <img src="https://www.platinx.io/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-25-at-3.31.19-PM.jpeg"/>
              <h3>Sign up</h3>
            </div>
            <div>
              <form onSubmit={handleSignup} className="signup-form">
                <input name="name" type="text" placeholder="User name" onChange={hanldeChangeSignup}  required/>
                <input name="email" type="email" placeholder="Email" onChange={hanldeChangeSignup} required/>
                <input name="password" type="password" placeholder="Password" onChange={hanldeChangeSignup} required/>
                <select name="role" placeholder="select role" onChange={hanldeChangeSignup} required>
                  <option>select role</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                <button type="submit">Sign Up</button>
              </form>
            </div>
            <div className="switch-login">
            <button onClick={handleloginSwitch}>Login?</button>
            </div>
          </div>
        </div>
      </div>

      {/* <-----------------------Login-------------------------> */}

      <div hidden={login}>
        <div className="main-login">
          <div className="login">
            <div>
            <img style={{width:"400px"}} src="https://www.platinx.io/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-25-at-3.31.19-PM.jpeg"/>
              <h3>Login</h3>
            </div>
            <div>
              <form onSubmit={handleLogin} className="login-form">
                <input name="email" type="email" placeholder="Email" onChange={handleChangeLogin} required/>
                <input name="password" type="password" placeholder="Password" onChange={handleChangeLogin} required/>
                <input name="refferal code" type="password" placeholder="Enter Refferal code" onChange={handleChangeLogin} required/>
                <select name="role" placeholder="select role" onChange={handleChangeLogin} required>
                  <option>select role</option>
                  <option>User</option>
                  <option>Admin</option>
                </select>
                
                <button type="submit">Login</button>
              </form>
            </div>
            <div className="switch-signup">
            <button onClick={handleSignupSwitch}>Sign up?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
