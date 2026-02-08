import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/GiftReturn.css";

function GiftReturn() {
  return (
    <>
      <Navbar />

      <div className="gift-return-container">
        
        <section className="gift-card-section">
          <h2>Check Gift Card Balance</h2>
          <p>Enter your gift card number to check the available balance.</p>

          <input
            type="text"
            placeholder="Enter Gift Card Number"
            className="gift-input"
          />
          <button className="gift-btn">Check Balance</button>
        </section>

        <section className="return-section">
          <h2>Return & Exchange</h2>
          <p>
            We offer a hassle-free return & exchange policy within <b>7 days</b>
            of delivery.
          </p>

          <ul>
            <li>Items must be unused and in original packaging</li>
            <li>Return pickup will be arranged after approval</li>
            <li>Refunds are processed within 5–7 business days</li>
          </ul>

          <button className="return-btn">Start a Return</button>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default GiftReturn;
