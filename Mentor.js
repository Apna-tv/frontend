import React from 'react';
import NavigationMenu from '../components/NavigationMenu';
import Footer from '../components/Footer';
import './Mentor.css';
import logo from '../assets/logo.svg';

const Mentor = () => {
  return (
    <div className="mentor-page">
      <NavigationMenu />
      
      <div className="mentor-header-section">
        <div className="filter-container">
          <div className="filter-row">
            <div className="filter-label">Categories</div>
            <div className="filter-options">
              <button className="filter-option">ALL</button>
              <button className="filter-option">IT,Software</button>
              <button className="filter-option">Management and Business</button>
              <button className="filter-option">Electronics and Hardware</button>
              <button className="filter-option">BIO tech and Pharma</button>
              <button className="filter-option">Others</button>
            </div>
          </div>
          
          <div className="filter-row">
            <div className="filter-label">Role/designation</div>
            <div className="filter-options">
              <button className="filter-option">ALL</button>
              <button className="filter-option">SDE</button>
              <button className="filter-option">Product Manager</button>
              <button className="filter-option">Sales and Marketing</button>
              <button className="filter-option">Design and UI/UX</button>
              <button className="filter-option">Operation & Finance</button>
              <button className="filter-option">Others</button>
            </div>
          </div>
          
          <div className="filter-row">
            <div className="filter-label">Rating</div>
            <div className="filter-options">
              <button className="filter-option">ALL</button>
              <button className="filter-option">&#62;3.5/5.0 ★</button>
              <button className="filter-option">&#62;4.0/5.0 ★</button>
              <button className="filter-option">&#62;4.5/5.0 ★</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Meet Our Smart People Section */}
      <div className="team-section">
        <div className="team-container">
          <div className="section-subtitle">Our Team</div>
          <h2 className="section-title">Meet Our <span className="highlight">Smart People.</span></h2>
          
          <div className="team-grid">
            {/* Team Member 1 */}
            <div className="team-member">
              <div className="member-image"></div>
              <h3 className="member-name">Jonathan Andrew</h3>
              <p className="member-expertise">Expertise in finance and tech</p>
              <p className="member-experience">10+ year experience</p>
              <p className="member-position">Product Manager</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="team-member">
              <div className="member-image"></div>
              <h3 className="member-name">Jonathan Andrew</h3>
              <p className="member-expertise">Expertise in finance and tech</p>
              <p className="member-experience">10+ year experience</p>
              <p className="member-position">Product Manager</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="team-member">
              <div className="member-image"></div>
              <h3 className="member-name">Jonathan Andrew</h3>
              <p className="member-expertise">Expertise in finance and tech</p>
              <p className="member-experience">10+ year experience</p>
              <p className="member-position">Product Manager</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="team-member">
              <div className="member-image"></div>
              <h3 className="member-name">Jonathan Andrew</h3>
              <p className="member-expertise">Expertise in finance and tech</p>
              <p className="member-experience">10+ year experience</p>
              <p className="member-position">Product Manager</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            {/* Team Member 5 */}
            <div className="team-member">
              <div className="member-image"></div>
              <h3 className="member-name">Jonathan Andrew</h3>
              <p className="member-expertise">Expertise in finance and tech</p>
              <p className="member-experience">10+ year experience</p>
              <p className="member-position">Product Manager</p>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            
            {/* Team Member 6 */}
            <div className="team-member">
              <div className="member-image"></div>
              <h3 className="member-name">Jonathan Andrew</h3>
              <p className="member-expertise">Expertise in finance and tech</p>
              <p className="member-experience">10+ year experience</p>
              <p className="member-position">Product Manager</p>
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
      
      {/* Submit Mentor's Review Section */}
      <div className="mentor-review-section">
        <div className="review-content">
          <h2>Submit Mentor's Review</h2>
          <button className="feedback-btn">FEEDBACK FORM</button>
        </div>
      </div>
      
      {/* Mentorship Services Section */}
      <div className="mentorship-services">
        <div className="services-container">
          <div className="service-category">Strategic Planning</div>
          
          <div className="service-heading-container">
            <div className="service-heading">
              <h2>Providing 1:1 Mentorship and build confidence</h2>
              <p>Help businesses improve their operations, achieve their goals, and stay competitive in today's.</p>
              <button className="view-all-btn">VIEW ALL</button>
            </div>
          
            <div className="services-grid">
              <div className="service-item">
                <div className="service-icon strategic-icon"></div>
                <h3>Tailored Guidance and In-Depth Problem Solving</h3>
                <p>Business consultants can assist clients in developing long-term strategic plans to achieve their goals.</p>
                <a href="#" className="learn-more">Learn More <span className="arrow">→</span></a>
              </div>
              
              <div className="service-item">
                <div className="service-icon feedback-icon"></div>
                <h3>Accelerated Learning & Actionable Feedback</h3>
                <p>Conduct thorough market research to provide insights into market trends, customer behaviors, and others.</p>
                <a href="#" className="learn-more">Learn More <span className="arrow">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content section for mentor profiles would go here */}
      <div className="mentor-content">
        {/* Will add mentor profiles and content here */}
      </div>
      
      <Footer />
    </div>
  );
};

export default Mentor;
