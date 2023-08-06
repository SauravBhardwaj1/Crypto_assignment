import React from "react";
import "./Login.css"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginUser, setLoginUser] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const verifyLogin = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://referral-system-tqkc.onrender.com/api/user/get/:_id`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(loginUser),
      });
      alert("Login success")
      navigate("/")
      
    } catch (error) {
      console.log("error ", error);
    }
    
  };
  return (
    <>
    <Navbar />
    <div className="login-div">
      <h1>Login page</h1>
      <form onSubmit={verifyLogin}>
        <input className="login-input"
          onChange={(e) =>
            setLoginUser({ ...loginUser, email: e.target.value })
          }
          required
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <br/>
        <br/>
        <input className="login-input"
          onChange={(e) =>
            setLoginUser({ ...loginUser, password: e.target.value })
          }
          required
          type="password"
          name="password"
          placeholder="Enter your Password"
        />
        <br/>
        <br/>
        <button className="login-btn" onSubmit="submit">Submit</button>
      </form>
    </div>
    <Footer />
    </>
  );
};

export default Login;
