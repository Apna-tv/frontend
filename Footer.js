import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column company-info">
            <div className="footer-logo">
              <img src={logo} alt="Idea Ascend Logo" />
              <span>Idea Ascend</span>
            </div>
            <p className="company-description">
              Lorem ipsum dolor sit amet consectetur adipiscing mauris 
              volutpat ante ut sagittis efficitur arcu diam faucibus eli quis 
              rhoncus enim augue ut orci donec.
            </p>
            <div className="social-media">
              <p>Follow Us On:</p>
              <div className="social-icons">
                <a href="https://facebook.com" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="https://youtube.com" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                <a href="https://twitter.com" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="https://linkedin.com" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/">Our Team</Link></li>
              <li><Link to="/">Services</Link></li>
              <li><Link to="/">Contact Us</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><Link to="/">Strategic Planning Services</Link></li>
              <li><Link to="/">Market Research and Analysis</Link></li>
              <li><Link to="/">Financial Consulting</Link></li>
              <li><Link to="/">Operations Improvement</Link></li>
              <li><Link to="/">Organizational Development</Link></li>
              <li><Link to="/">Change Management</Link></li>
            </ul>
          </div>
          
          <div className="footer-column newsletter">
            <h3>Subscribe Newsletter</h3>
            <p>Explore our news and blog content today and take the first step towards unlocking your full business potential.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Email..." />
              <button type="button" className="subscribe-btn">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Idea Ascend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
