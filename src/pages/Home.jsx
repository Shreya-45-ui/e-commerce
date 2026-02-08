import ho from '../assets/1st.jpg'
import ss from '../assets/2nd.jpg'
import cc from '../assets/3rd.jpg'
import Product from '../Data/Product'
import '../style/home.css'
import '../style/auth.css'
import Navbar from '../components/Navbar'
import Category from './Category'
import Discount from './Discount'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    // Shuffle all products randomly
    const shuffled = [...Product].sort(() => Math.random() - 0.5);
    setRandomProducts(shuffled);
  }, []);

  return (
    <>
      <Navbar/>

      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
          <button data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
          <button data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
        </div>

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

      <Category/>
      <Discount/>

      {/* Randomized products */}
         <h1 style={{textAlign:"center",marginTop:"20px"}}>All Products</h1>
      <div className="product2">

     
        {randomProducts.slice(0,60).map(item => (
          <div
            key={item.id}
            className="product-card2"
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img src={item.image} alt={item.name} />

            <div className="product-info">
              <h4 className="brand">{item.brand}</h4>
              <p className="title">{item.name}</p>
              <span className="product-price">₹{item.price}</span>
            </div>

            <button
              className="add-cart-btn"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${item.id}`);
              }}
            >
              Add to Bag
            </button>
          </div>
        ))}
      </div>

      <Footer/>
    </>
  )
}

export default Home
