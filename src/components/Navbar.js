import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShopify, FaShoppingCart, FaTools, FaUser } from 'react-icons/fa';


const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Elite Creative Shop</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            <FaHome className="navbar-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/shop" className="navbar-link">
            <FaShopify className="navbar-icon" /> Shop
          </Link>
        </li>
        <li>
          <Link to="/cart" className="navbar-link">
            <FaShoppingCart className="navbar-icon" /> Cart <span className="cart-count">{cartCount}</span>
          </Link>
        </li>
        <li>
          <Link to="/services" className="navbar-link">
            <FaTools className="navbar-icon" /> Services
          </Link>
        </li>
        <li>
          <Link to="/profile" className="navbar-link">
            <FaUser className="navbar-icon" /> Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;