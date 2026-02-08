import Navbar from "../components/Navbar";
import ca from "../assets/men1.jpg";
import co from "../assets/men2.jpg";
import cd from "../assets/men3.jpg";
import '../style/home.css'

import "../style/men.css";
import { useEffect, useState } from "react";
import products from "../Data/Product.js"; // ✅ ONE product file
import Discount from "./Discount.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";
import ProductSection from "./ProductSection.jsx";

function Men() {
  const navigate = useNavigate();
  const [randomProducts, setRandomProducts] = useState([]);

  // ✅ Filter MEN products
  const menProducts = products.filter(
    item => item.gender === "Men"
  );

  // ✅ Random MEN products for New Arrivals
  useEffect(() => {
    const selected = [...menProducts]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);

    setRandomProducts(selected);
  }, []);

  return (
    <>
      <Navbar />

      {/* Carousel */}
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
                  <img src={ca} className="d-block w-100" alt="cloth" />
                </div>
      
                <div className="carousel-item">
                  <img src={co} className="d-block w-100" alt="cloth" />
                </div>
      
                <div className="carousel-item">
                  <img src={cd} className="d-block w-100" alt="cloth" />
                </div>
              </div>
      
             
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
      
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>

      {/* New Arrivals */}
      <div style={{ marginTop: "30px" }}>
        <h4 style={{ textAlign: "center" }}>New Arrivals</h4>

        <div className="product">
          {randomProducts.map(item => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />

              <div className="product-info">
                <h3>{item.name}</h3>
                <p>{item.brand}</p>
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
      </div>

      <ProductSection  gender="Men"/>
      <Discount />

      {/* ALL MEN PRODUCTS */}
      <div className="pro">
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          ALL PRODUCTS
        </h2>

        <div className="product2">
          {menProducts.slice(0, 60).map(item => (
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
      </div>

      <Footer />
    </>
  );
}

export default Men;
