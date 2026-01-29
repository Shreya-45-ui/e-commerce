
import ho from '../assets/1st.jpg'
import ss from '../assets/2nd.jpg'
import cc from '../assets/3rd.jpg'
import '../style/home.css'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <>
      <Navbar/>

      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* indicators */}
        <div className="carousel-indicators">
          <button data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
          <button data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
          <button data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        </div>

        {/* images */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ho} className="d-block w-100" alt="cloth" />
          </div>

          <div className="carousel-item">
            <img src={ss} className="d-block w-100" alt="cloth" />
          </div>

          <div className="carousel-item">
            <img src={cc} className="d-block w-100" alt="cloth" />
          </div>
        </div>

       
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  )
}

export default Home
