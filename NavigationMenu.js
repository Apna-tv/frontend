import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavigationMenu.css';
import logo from '../assets/logo.svg';

const NavigationMenu = () => {
  const location = useLocation();
  
  return (
    <nav className="navigation-menu">
      <div className="nav-container">
        <div className="brand-logo">
          <Link to="/">
            <img src={logo} alt="Idea Ascend Logo" />
            <span>Idea Ascend</span>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
          <Link to="/founders-team" className={`nav-link ${location.pathname === '/founders-team' ? 'active' : ''}`}>Founder's Team</Link>
          <Link to="/mentor" className={`nav-link ${location.pathname === '/mentor' ? 'active' : ''}`}>Mentor</Link>
          <Link to="/investor" className={`nav-link ${location.pathname === '/investor' ? 'active' : ''}`}>Investor</Link>
        </div>
        <button className="chatbot-button">CHATBOT</button>
      </div>
    </nav>
  );
};

export default NavigationMenu;
