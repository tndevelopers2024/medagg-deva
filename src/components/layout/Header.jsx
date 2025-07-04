import React, { useState } from 'react';
import '../../assets/css/home/Header.css';
import { FiPhoneCall } from 'react-icons/fi';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className="header-left">
        <img src="/logo/Hlogo.png" alt="Logo" className="logo" />
        <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>

      <div className="header-right">
        <div className="call-icon">
          <FiPhoneCall />
        </div>
        <button className="outlined-btn">Join with us</button>
        <button className="outlined-btn">Became an Investor</button>
        <button className="filled-btn">Book Appointment</button>
      </div>

      <button
        className="navbar-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <GiHamburgerMenu />
      </button>
    </header>
  );
};

export default Header;
