import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/InfoPages.css";

function Career() {
  return (
    <>
      <Navbar />
      <div className="info-page">
        <h2>Career</h2>
        <p>Join our growing team and build your future with us.</p>

        <ul>
          <li>🧑‍💻 Frontend Developer</li>
          <li>🎨 UI/UX Designer</li>
          <li>📦 Supply Chain Executive</li>
        </ul>

        <p>Email your resume to <b>careers@yourstore.com</b></p>
      </div>
      <Footer />
    </>
  );
}

export default Career;
