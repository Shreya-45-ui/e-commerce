import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/InfoPages.css";

function StoreLocator() {
  return (
    <>
      <Navbar />
      <div className="info-page">
        <h2>Store Locator</h2>
        <p>Find our stores near you.</p>

        <ul>
          <li>📍 Delhi – Connaught Place</li>
          <li>📍 Mumbai – Andheri West</li>
          <li>📍 Bangalore – Indiranagar</li>
          <li>📍 Kolkata – Salt Lake</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default StoreLocator;
