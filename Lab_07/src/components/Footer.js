import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className="container mt-4">
        <div className="brand-bar">
          <div className="brand-item">
            <span style={{ background: '#f5a623', padding: '10px', borderRadius: '4px', color: '#fff', fontSize: '12px', textAlign: 'center', lineHeight: 1.4, display: 'block', fontWeight: 700 }}>
              SAVE $1,000's<br /><small style={{ fontWeight: 400 }}>ON TOP SPA BRANDS</small>
            </span>
          </div>
          <div className="brand-item"><span style={{ fontStyle: 'italic', color: '#1a5fa3', fontSize: '22px', fontWeight: 700 }}>OceanicSpa</span></div>
          <div className="brand-item"><span style={{ color: '#e05a3a', fontSize: '20px', fontWeight: 700 }}>&#10022; Caldera<em>Spas</em></span></div>
          <div className="brand-item"><span style={{ color: '#2d8a4e', fontSize: '20px', fontWeight: 700 }}>🌴 Island<em>Spas</em></span></div>
        </div>
      </div>
      <footer className="hs-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h5>CONTACT US</h5>
              <p>yoursitename.com<br />CALL 24/7: 888 - 201 - 8899<br />Your Address: Street<br />State &amp; Zip Code<br />City &amp; Country<br />Email: servicemail@yoursitename.com</p>
              <div className="social-row">
                <a href="#twitter"><i className="fab fa-twitter"></i></a>
                <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
                <a href="#google"><i className="fab fa-google-plus-g"></i></a>
                <a href="#youtube"><i className="fab fa-youtube"></i></a>
                <a href="#pinterest"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h5>INFORMATION</h5>
              <ul className="list-unstyled">
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/contact">CUSTOMER SERVICE</Link></li>
                <li><a href="#privacy">PRIVACY POLICY</a></li>
                <li><a href="#sitemap">SITE MAP</a></li>
                <li><a href="#search">SEARCH TERMS</a></li>
                <li><Link to="/contact">CONTACT US</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>MY ACCOUNT</h5>
              <ul className="list-unstyled">
                <li><Link to="/login">SIGN IN</Link></li>
                <li><Link to="/cart">VIEW CART</Link></li>
                <li><a href="#wishlist">MY WISHLIST</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>SIGNUP FOR A NEWSLETTER</h5>
              <p style={{ fontSize: '11px', marginBottom: '8px' }}>SIGN UP FOR OUR NEWSLETTER:</p>
              <input type="email" className="footer-input" placeholder="Your email address" />
              <button className="btn-hs btn-red w-100 newsletter-btn">Subscribe</button>
              <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.5px', marginTop: '11px' }}>PAYMENT SOLUTIONS</p>
              <div class="pay-icons">
                <span className="pay-icon">VISA</span>
                <span className="pay-icon">MC</span>
                <span className="pay-icon">AMEX</span>
                <span className="pay-icon">PayPal</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">&copy; 2014 Hotubspaservice.com. All Rights Reserved.</div>
      </footer>
    </>
  );
}

export default Footer;
