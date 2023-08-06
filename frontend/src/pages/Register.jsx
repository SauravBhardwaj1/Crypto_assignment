import React from "react";
import "./Register.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Signup = () => {
  const [loginUser, setLoginUser] = React.useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    country:""
  });

  const verifyform = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://referral-system-tqkc.onrender.com/api/user/create`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(loginUser),
      });
      alert("Signup success")
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <>
    <Navbar />
    <div className="signup-form">
        
      <h1>Signup page</h1>
      <form onSubmit={verifyform}>
        <input className="signup-input"
          onChange={(e) => setLoginUser({ ...loginUser, name: e.target.value })}
          required
          type="text"
          name="name"
          placeholder="Enter your Name"
        />
        <br/>
        <br/>
        <input className="signup-input"
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
        <input className="signup-input"
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
        <input className="signup-input"
          onChange={(e) =>
            setLoginUser({ ...loginUser, phone: e.target.value })
          }
          required
          type="number"
          name="phone"
          placeholder="Enter your Phone Number"
        /> 
        <br />
        <br />

        <select className='country'  onChange={(e) =>
            setLoginUser({ ...loginUser, country: e.target.value })
          }>
                  <option value="">Country</option>
                  <option value="$">United States</option>
                  <option value="€">European Union</option>
                  <option value="£">United Kingdom</option>
                  <option value="¥">Japan</option>
                  <option value="CHf">Switzerland</option>
                  <option value="$">Australia</option>
                  <option value="CAD">Canada</option>
                  <option value="¥">China</option>
                  <option value="₹">India</option>
                  <option value="₽">Russia</option>
                  <option value="₩">South Korea</option>
                  <option value="R$">Brazil</option>
                  <option value="Mex$">Mexico</option>
                  <option value="R">South Africa</option>
                  <option value="₺">Turkey</option>
                </select><br /> <br />
        <br/>
        <br/>
        <button className="signup-btn">Submit now</button>
      </form>
      
    </div>
    <Footer />
    </>
  );
};

export default Signup;