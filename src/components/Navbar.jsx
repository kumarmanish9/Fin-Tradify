import React from "react";
 
import Navbar from "./components/Navbar";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm py-3">
      <div className="container">

        {/* LOGO */}
        
        <a className="navbar-brand d-flex align-items-center" href="#">
         <img
          src={logo}
          alt="logo"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
         />
  <span className="fw-bold text-primary">FIN TRADIFY</span>
</a>

        {/* TOGGLE BUTTON (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Web & App Development</a></li>
                <li><a className="dropdown-item" href="#">SEO Optimization</a></li>
                <li><a className="dropdown-item" href="#">Social Media Marketing</a></li>
                <li><a className="dropdown-item" href="#">Google Ads & Meta</a></li>
                <li><a className="dropdown-item" href="#">Graphic Design</a></li>
              </ul>
            </li>

            {/* FINTECH DROPDOWN */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Fintech
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Payment Gateway</a></li>
                <li><a className="dropdown-item" href="#">Peer to Peer Transfer</a></li>
                <li><a className="dropdown-item" href="#">Digital Wallet</a></li>
                <li><a className="dropdown-item" href="#">International Payments</a></li>
              </ul>
            </li>

            {/* CONTACT BUTTON */}
            <li className="nav-item ms-3">
              <button className="btn btn-outline-primary">
                Contact Us
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;