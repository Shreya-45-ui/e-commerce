import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/InfoPages.css";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="info-page">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you.</p>

        <ul>
          <li>📧 Email: support@yourstore.com</li>
          <li>📞 Phone: +91 98765 43210</li>
          <li>⏰ Support Hours: 10 AM – 7 PM</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
