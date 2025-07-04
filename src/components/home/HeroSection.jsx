import React from 'react';
import { SlSocialFacebook } from "react-icons/sl";
import { PiInstagramLogoThin,PiYoutubeLogoThin  } from "react-icons/pi";
import { LuLinkedin } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";






const Hero = () => {
  return (
    
    <section className="hero">

      <div className="hero-container">
        

        {/* Left Section */}
        <div className="hero-left">
          <div className="logo-box">
            <img src="/logo/Logo.png" alt="ISVIR Logo" />
            <div className="logo-text">
              <h2><span>ISVIR <h2>Indian Society of Vascular and<br />Interventional Radiology </h2></span></h2>
            </div>
          </div>

          <h1 className="main-heading">
            No Surgery. No Scars. <br />Just Results.
          </h1>
          <p className="sub-heading">
            We help you move beyond fear, surgery, and slow recovery.
          </p>

          <div className="search-container">
            <input type="text" placeholder="Facing symptoms? Type them in" />
            <button>Search</button>
          </div>

          <div className="popular">
            <strong>Popular Search :</strong>
            <div className="tags">
              <span>Knee Pain</span>
              <span>Breast Nodule</span>
              <span>Thyroid</span>
              <span>Prostate</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hero-right">
          <div className="social-media">
            <p className="follow-text">Follow Us On :</p>
            <div className="icons">
             <i className="icon-circle"><SlSocialFacebook /></i>
             <i className="icon-circle"><PiInstagramLogoThin /></i>
             <i className="icon-circle"><PiYoutubeLogoThin /></i>
             <i className="icon-circle"><LuLinkedin /></i>
             <i className="icon-circle"><RiTwitterXFill /></i>
            </div>
          </div>

          <div className="stats-boxes">
  <div className="stat-box" id='sb1'>
    <div className="stat-pill">20+</div>
    <span>Operating Cities</span>
  </div>
  <div className="stat-box" id='sb2'>
    <div className="stat-pill">200+</div>
    <span>Partnered Hospital</span>
  </div>
  <div className="stat-box" id='sb3'>
    <div className="stat-pill">14K</div>
    <span>Helped - Patients</span>
  </div>
</div>


          <div className="doctor-image">
              <img className="Doctorimg" src="/images/hero.png" alt="Doctor" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
