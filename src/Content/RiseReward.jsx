import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/InfoPages.css";

function RiseRewards() {
  return (
    <>
      <Navbar />
      <div className="info-page">
        <h2>Rise Rewards</h2>
        <p>Earn points every time you shop with us.</p>

        <ul>
          <li>💎 Earn 1 point for every ₹100 spent</li>
          <li>🎁 Redeem points for discounts</li>
          <li>🚀 Early access to sales</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default RiseRewards;
