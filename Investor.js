import React from 'react';
import NavigationMenu from '../components/NavigationMenu';
import Footer from '../components/Footer';
import './Investor.css';

const Investor = () => {
  return (
    <div className="investor-page">
      <NavigationMenu />
      
      <div className="investor-header-section">
        <div className="filter-container">
          <div className="filter-row">
            <div className="filter-label">Round</div>
            <div className="filter-options">
              <button className="filter-option">ALL</button>
              <button className="filter-option">Pre-seed</button>
              <button className="filter-option">Seed</button>
              <button className="filter-option">Series A</button>
              <button className="filter-option">Series B</button>
              <button className="filter-option">Series C</button>
              <button className="filter-option">Other</button>
            </div>
          </div>
          
          <div className="filter-row">
            <div className="filter-label">Partners</div>
            <div className="filter-options">
              <button className="filter-option">ALL</button>
              <button className="filter-option">Incubation Centre</button>
              <button className="filter-option">Angel Investors</button>
              <button className="filter-option">HNI'S</button>
              <button className="filter-option">Venture Firms</button>
              <button className="filter-option">Others</button>
            </div>
          </div>
          
          <div className="filter-row">
            <div className="filter-label">Stage</div>
            <div className="filter-options">
              <button className="filter-option">ALL</button>
              <button className="filter-option">Ideation Stage</button>
              <button className="filter-option">Early Stage</button>
              <button className="filter-option">Growth Stage</button>
              <button className="filter-option">Expansion Stage</button>
              <button className="filter-option">Other</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Meet Our Investor Section */}
      <div className="investor-grid-section">
        <div className="container">
          <h2 className="section-title">Meet Our <span className="highlight">Investor.</span></h2>
          
          <div className="investor-grid">
            {/* Investor 1 */}
            <div className="investor-card">
              <div className="investor-image investor-1"></div>
              <h3 className="investor-name">Jonathan Andrew</h3>
              <p className="investor-position">CEO Zenith @XYZ, Angel Investor</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            {/* Investor 2 */}
            <div className="investor-card">
              <div className="investor-image investor-2"></div>
              <h3 className="investor-name">Jonathan Andrew</h3>
              <p className="investor-position">CEO Zenith @XYZ, Angel Investor</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            {/* Investor 3 */}
            <div className="investor-card">
              <div className="investor-image investor-3"></div>
              <h3 className="investor-name">Jonathan Andrew</h3>
              <p className="investor-position">CEO Zenith @XYZ, Angel Investor</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            {/* Investor 4 */}
            <div className="investor-card">
              <div className="investor-image investor-4"></div>
              <h3 className="investor-name">Jonathan Andrew</h3>
              <p className="investor-position">CEO Zenith @XYZ, Angel Investor</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            {/* Investor 5 */}
            <div className="investor-card">
              <div className="investor-image investor-5"></div>
              <h3 className="investor-name">Jonathan Andrew</h3>
              <p className="investor-position">CEO Zenith @XYZ, Angel Investor</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            {/* Investor 6 */}
            <div className="investor-card">
              <div className="investor-image investor-6"></div>
              <h3 className="investor-name">Jonathan Andrew</h3>
              <p className="investor-position">CEO Zenith @XYZ, Angel Investor</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Join our Club Section */}
      <div className="join-club-section">
        <div className="container">
          <div className="join-club-content">
            <h2>Join our Club</h2>
            <p>Every business is unique. Request a tailored solution crafted specifically for your organization's challenges and goals.</p>
            <button className="register-btn">REGISTER HERE</button>
          </div>
        </div>
      </div>
      
      {/* Our Key Partners Section */}
      <div className="key-partners-section">
        <div className="container">
          <h2 className="section-title">Our Key Partners</h2>
          
          <div className="partners-grid">
            {/* Row 1 */}
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
            
            {/* Row 2 */}
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
            
            {/* Row 3 */}
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
            <div className="partner-logo">
              <img src="https://via.placeholder.com/150x60?text=LOGOIPSUM" alt="Partner Logo" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content section for investor profiles would go here */}
      <div className="investor-content">
        {/* Will add investor profiles and content here */}
      </div>
      
      {/* Investor Matching Section - Moved to just above Footer */}
      <div className="investor-matching-section">
        <div className="container">
          <div className="strategic-label">Strategic Planning</div>
          
          <div className="matching-grid">
            <div className="matching-main">
              <h2>Investor Matching and Curated Investor Network</h2>
              <p>Help businesses improve their operations, achieve their goals, and stay competitive in today's.</p>
              <button className="view-all-btn">VIEW ALL</button>
            </div>
            
            <div className="matching-feature">
              <div className="feature-icon">
                <img src="https://via.placeholder.com/50x50?text=💰" alt="Streamlined Process" />
              </div>
              <h3>Streamlined Process to secure Funding</h3>
              <p>Business consultants can assist clients in developing long-term strategic plans to achieve their goals.</p>
              <a href="#" className="learn-more">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
            
            <div className="matching-feature">
              <div className="feature-icon">
                <img src="https://via.placeholder.com/50x50?text=📊" alt="Enhanced Visibility" />
              </div>
              <h3>Enhanced Visibility & Improved Funding Success</h3>
              <p>Conduct thorough market research to provide insights into market trends, customer behaviors, and others.</p>
              <a href="#" className="learn-more">Learn More <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Investor;
