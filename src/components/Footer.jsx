import { CardSimIcon, Gift, Van } from "lucide-react";
import {
  Facebook,
  Github,
  MessageCircle
} from "lucide-react";
import "../style/footer.css";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">
      {/* Top Features */}
      <div className="footer-features">
        <div className="feature">
          <Van />
          <h4>Free Shipping</h4>
          <p>On orders of INR 1500 and above</p>
        </div>

        <div className="feature">
          <Gift />
          <h4>Easy Returns</h4>
          <p>Free returns until 7 days of delivery</p>
        </div>

        <div className="feature">
          <CardSimIcon />
          <h4>Secure Payment</h4>
          <p>Safe & hassle free checkout</p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-col">
          <h4 className="mt">Products</h4>
          <p><NavLink to="/best">New In</NavLink></p>
          <p><NavLink to="/men">Men</NavLink></p>
          <p><NavLink to="/women">Women</NavLink></p>
          <p><NavLink to="/kids">Kids</NavLink></p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <p><NavLink to="/about">About Us</NavLink></p>
          <p><NavLink to="/account">My Account</NavLink></p>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <p><NavLink to="/help">FAQ</NavLink></p>
          <p><NavLink to="/return">Check Gift Card Balance</NavLink></p>
          <p><NavLink to="/return">Return & Exchange</NavLink></p>
          <p><NavLink to="/terms">Terms of Use</NavLink></p>
          <p><NavLink to="/privacy">Privacy Policy</NavLink></p>
          <p><NavLink to="/store">Store Pickup</NavLink></p>
          <p><NavLink to="/shopping">Shipping Policy</NavLink></p>
        </div>

        <div className="footer-col">
          <h4>Useful Links</h4>
          <p><NavLink to="/store-locator">Store Locator</NavLink></p>
          <p><NavLink to="/rise-rewards">Rise Rewards</NavLink></p>
          <p><NavLink to="/sustainability">Sustainability</NavLink></p>
          <p><NavLink to="/career">Career</NavLink></p>
          <p><NavLink to="/contact-us">Contact Us</NavLink></p>
        </div>

        {/* 🌐 Social Links */}
        <div className="footer-col">
          <h4>Connect With Us</h4>

          <div className="social-links">
            <a
              href="https://wa.me/917679628204"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp/> WhatsApp
            </a>

            <a
              href="https://www.facebook.com/share/1ACXiZGUeU/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook/> Facebook
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub/> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Nexora and Black Private Limited.</p>
      </div>
    </footer>
  );
}

export default Footer;
