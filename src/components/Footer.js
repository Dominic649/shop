import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import logo from '../images/logo.png';  // Make sure to replace with the actual logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Elite Designs Logo" className="footer-logo-img" />
          <h2>Elite Creative Agency</h2>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedinIn />
          </a>
          <a href="mailto:info@eliteagency.com" className="social-icon">
            <FaEnvelope />
          </a>
        </div>

        {/* Footer Text */}
        <div className="footer-text">
          <p>&copy; 2025 Elite Creative Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
