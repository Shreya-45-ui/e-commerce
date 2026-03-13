import { CardSimIcon, Gift, Van } from "lucide-react";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/footer.css";

function Footer() {
  return (
    <footer className="bg-white text-dark mt-5 shadow-sm">
      {/* Top Features */}
      <div className="container py-4 border-bottom">
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <Van size={32} className="mb-2" />
            <h5>Free Shipping</h5>
            <p className="text-muted">On orders of INR 1500 and above</p>
          </div>

          <div className="col-md-4 mb-3">
            <Gift size={32} className="mb-2" />
            <h5>Easy Returns</h5>
            <p className="text-muted">Free returns until 7 days of delivery</p>
          </div>

          <div className="col-md-4 mb-3">
            <CardSimIcon size={32} className="mb-2" />
            <h5>Secure Payment</h5>
            <p className="text-muted">Safe & hassle-free checkout</p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-5">
        <div className="row text-center text-md-start">
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Products</h6>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/best">New In</NavLink>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/men">Men</NavLink>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/women">Women</NavLink>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/kids">Kids</NavLink>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Company</h6>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/about">About Us</NavLink>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/account">My Account</NavLink>
          </div>

          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Help</h6>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/help">FAQ</NavLink>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/return">Check Gift Card Balance</NavLink>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/return">Return & Exchange</NavLink>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/terms">Terms of Use</NavLink>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/privacy">Privacy Policy</NavLink>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/store">Store Pickup</NavLink>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/shopping">Shipping Policy</NavLink>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Useful Links</h6>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/store-locator">Store Locator</NavLink>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/rise-rewards">Rise Rewards</NavLink>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/sustainability">Sustainability</NavLink>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/career">Career</NavLink>
            <NavLink className="d-block mb-1 text-decoration-none text-dark" to="/contact-us">Contact Us</NavLink>
          </div>

          {/* Social Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Connect With Us</h6>
            <div className="d-flex flex-column gap-2">
              <a href="https://wa.me/917679628204" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-dark text-decoration-none gap-2">
                <FaWhatsapp /> WhatsApp
              </a>
              <a href="https://www.facebook.com/share/1ACXiZGUeU/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-dark text-decoration-none gap-2">
                <FaFacebook /> Facebook
              </a>
              <a href="https://github.com/Shreya-45-ui/e-commerce" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-dark text-decoration-none gap-2">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2026 Nexora and Black Private Limited.</p>
      </div>
    </footer>
  );
}

export default Footer;