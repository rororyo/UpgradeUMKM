import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from '../../partials/Navbar.jsx';
const Login = () => {
    const apiUrl="http://localhost:4000";
    const [loginDetails, setLoginDetails] = useState({
      email: "",
      password: "",
    })
    const navigate=useNavigate()
    axios.defaults.withCredentials=true
    async function handleSubmit(event) {
      event.preventDefault();
      try {
        const response = await axios.post(`${apiUrl}/login`, loginDetails);
        if (response.data.token) {
          const expirationTime = new Date().getTime() + 60 * 60 * 1000;
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("tokenExpiration", expirationTime);
          setLoginDetails({
            username: "",
            password:''
          })
          navigate("/")
        }
        else{
            alert("Invalid credentials")
            setLoginDetails({
              username: "",
              password:''
            })
            navigate("/login")
        }
        
      } catch (error) {
        console.log(error);
      }
    }
  return (
<div
      style={{
        backgroundImage: 'url("/assets/images/auth/authbg.png")',
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "85vh" }}
      >
        <span id="title-text">Siap upgrade usaha anda?</span>
        <span id="subtitle-text">Buat akun dan rasakan manfaatnya!</span>
        <div className="container mt-4" id="auth-container">
<p className="text-center" id="auth-text">Login</p>
          <div style={{ minHeight: "45vh" }} className="mt-4 d-flex flex-row">
            <form className="ms-4 col-5 d-flex flex-column" onSubmit={handleSubmit}>
              <label htmlFor="email" className="label-text">Email</label>
              <input
                type="email"
                className="auth-input form-control"
                name="email"
                onChange={(e) =>
                  setLoginDetails({ ...loginDetails, email: e.target.value })
                }
                placeholder="Enter your email" required
              />
              <label htmlFor="password" className="label-text mt-4">Password</label>
              <input
                type="password"
                className="form-control auth-input"
                name="password"
                onChange={(e) =>
                  setLoginDetails({ ...loginDetails, password: e.target.value })
                }
                placeholder="Enter your password" required
              />
              
               <button type="submit" className="btn mt-4"style={{minWidth:"95%"}} id="submit-button">
                      <span id='submit-label'>Login</span>
                    </button>
            </form>

            <div className="col-1 d-flex flex-column align-items-center ms-3">
            <span id="or-text">OR</span>
            <div className="vertical-line"></div>

            </div>
            <div className="col-5">
<button className="auth-btn btn d-flex align-items-center">
  <span id="third-party-label">Login with Google</span>
  <img src="/assets/images/auth/googleLogo.jpeg" className="auth-logo ms-auto" />
</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
