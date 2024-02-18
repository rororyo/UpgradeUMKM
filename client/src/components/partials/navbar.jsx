import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Upgrade UMKM
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


        {/* Right-aligned buttons */}
        
    <div className="d-flex ml-auto">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
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
              <a className="nav-link" href="/feedback">
                Feedback
              </a>
            </li>
          </ul>
        </div>
          <a className="btn btn-primary me-2" href="/login">
            Login
          </a>
          <a className="btn btn-outline-primary" href="/register">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
