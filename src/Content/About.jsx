import Navbar from "../components/Navbar";
import a from "../assets/ab.jpg"
import '../style/about.css'
import Footer from "../components/Footer";


function About() {
    return (
        <>
            <Navbar />
            <section className="about-hero">
                <div className="about-content">
                    <h1>ABOUT US</h1>
                    <p>
                        Nexora & Black is a modern fashion destination bringing trend-led
                        styles, premium quality, and effortless shopping together. We focus
                        on comfort, confidence, and sustainability.
                    </p>
                    <button className="about-btn">Learn More</button>
                </div>


                <div className="about-image">
                    <img src={a} alt="About Us" />
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default About