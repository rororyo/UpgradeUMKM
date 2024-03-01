import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../partials/Navbar.jsx";

const Register = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [notify, setNotify] = useState("");

  const apiUrl = "http://localhost:4000";
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const result = await axios.post(apiUrl + "/register", values);
      if (result.status === 200) {
        setNotify("Registered Successfully");
      } else {
        setNotify("Error Registering User");
      }
    } catch (err) {
      setNotify(err.message + " : " + err.response.data);
    }
  }
  return (
    <div style={{backgroundImage:'url("/assets/images/auth/authbg.png")',minHeight:'100vh'}}>
      <Navbar />
      <div className="container mt-5">
        <h1>Register</h1>

        <div className="row">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    {notify && (
                      <div className="alert alert-warning d-flex justify-content-between align-items-center">
                        <div>{notify}</div>
                        <button
                          onClick={() => setNotify("")}
                          className="btn-close"
                        ></button>
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={(e) =>
                        setValues({ ...values, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={(e) =>
                        setValues({ ...values, password: e.target.value })
                      }
                    />
                  </div>
                  <div className="d-flex mt-4">
                    <button type="submit" className="btn btn-dark">
                      Register
                    </button>
                    <Link to={"/login"} className="btn btn-dark ms-3">
                      Login{" "}
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
