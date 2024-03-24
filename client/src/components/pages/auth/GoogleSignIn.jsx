import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router";

const GoogleSignIn = () => {
  const navigate= useNavigate()
  async function handleCallbackResponse(res) {
    try {
      const userObject = jwtDecode(res.credential);
      const {email}= userObject
      const response = await axios.post("http://localhost:4000/google-user", { email , password:'google'});
      if (response.status === 200) {
navigate("/")
      }

    } catch (error) {
      console.error("Error decoding JWT:", error);
    }
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "969102099818-bth1ij72flcok6ovedqcpe6q8riv8v0c.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("google-sign-btn"), {});
  }, []);

  return (
    <div>
      <button
        className="auth-btn btn custom-google-signin-btn"
        id="google-sign-btn"
      >
        <span id="third-party-label">Login with Google</span>
        <img
          src="/assets/images/auth/googleLogo.jpeg"
          className="auth-logo ms-auto"
          alt="Google Logo"
        />
      </button>
    </div>
  );
};

export default GoogleSignIn;
