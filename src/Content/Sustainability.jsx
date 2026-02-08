import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/InfoPages.css";

function Sustainability() {
  return (
    <>
      <Navbar />
      <div className="info-page">
        <h2>Sustainability</h2>
        <p>
          We are committed to reducing our environmental impact through
          eco-friendly materials and ethical sourcing.
        </p>

        <ul>
          <li>♻️ Sustainable packaging</li>
          <li>🌱 Eco-friendly fabrics</li>
          <li>🤝 Ethical manufacturing</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Sustainability;
