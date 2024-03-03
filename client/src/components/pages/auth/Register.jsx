//TODO: a litle resizing, bigger input text, show errors
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../partials/Navbar.jsx";

//css imports
import "/src/components/pages/auth/css/auth.css";
const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    repeatPassword:"",
  });

  const [notify, setNotify] = useState("");

  const apiUrl = "http://localhost:4000";
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const result = await axios.post(apiUrl + "/register", {
        email: values.email,
        password: values.password,
      });
      if (result.status === 200) {
        setNotify("Registered Successfully");
        console.log("Registered sucessfuly")
      } else {
        setNotify("Error Registering User");
      }
    } catch (err) {
      setNotify(err.message + " : " + err.response.data);
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
        <div className="container mt-5" id="auth-container">
<p className="text-center" id="auth-text">Register</p>
          <div style={{ minHeight: "45vh" }} className="mt-2 d-flex flex-row">
            <form className="ms-4 col-5 d-flex flex-column" onSubmit={handleSubmit}>
              <label htmlFor="email" className="label-text">Email</label>
              <input
                type="email"
                className="auth-input form-control"
                name="email"
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                placeholder="Enter your email" required
              />
              <label htmlFor="password" className="label-text mt-4">Password</label>
              <input
                type="password"
                className="form-control auth-input"
                name="password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                placeholder="Enter your password" required
              />
              <label htmlFor="repeat-password" className="label-text mt-4">Repeat Password</label>
              <input
                type="password"
                className="form-control auth-input"
                name="repeat-password"
                onChange={(e) =>
                  setValues({ ...values, repeatPassword: e.target.value })
                }
                placeholder="Repeat your password" required
              />
               <button type="submit" className="btn mt-4"style={{minWidth:"95%"}} id="submit-button">
                      <span id='submit-label'>Register</span>
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

export default Register;
