import React from "react";
import "./css/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-bg">
      <div className="container-fluid">
        <a href="/">
          <img src="/assets/images/logo.png" alt="Logo Upgrade UMKM"  className="logo-img"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
    <div className="d-flex ml-auto">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active nav-text" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle nav-text"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programs
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/biz-guide">
                    BizGuide Pro
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/skill-boost">
                    SkillBoost Pro
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/biz-connect">
                    BizConnect Hub
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/biz-track">
                    BizTrack Monitor
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/digi-market">
                    DigiMarket Access
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/biz-live">
                    BizLive Insight
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-text" href="/feedback">
                Feedback
              </a>
            </li>
          </ul>
          <a className="btn btn-light me-2" href="/login">
          <span style={{color:'rgba(72, 45, 0, 0.7)'}}> Login </span>
          </a>
          <a className="btn btn-outline-light" href="/register">
          <span className=""> Register </span>
          </a>
        </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
