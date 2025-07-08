import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Logo and About */}
        <div className="footer-section">
          <h2 className="footer-logo">Food<span style={{ color: "#ffc404" }}>King</span></h2>
          <p className="footer-text">
            Delivering happiness with every bite. Fresh, fast, and flavorful food at your doorstep.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/meals">Meals</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@foodking.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Mumbai, Maharashtra</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FoodKing. All rights reserved.</p>
      </div>
    </footer>
  );
}
