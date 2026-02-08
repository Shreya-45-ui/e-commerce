import Navbar from "../components/Navbar";
import "../style/home.css";
import "../style/men.css";
import ta from "../assets/w1.jpg";
import to from "../assets/w2.jpg";
import tt from "../assets/w3.jpg";
import Footer from "../components/Footer";
import ProductSection from "./ProductSection";
import Discount from "./Discount";
import products from "../Data/Product";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Women() {
  const navigate = useNavigate();
  const [randomProducts, setRandomProducts] = useState([]);

  const womenProducts = products.filter(
    item => item.gender === "Women"
  );

 
  useEffect(() => {
    const selected = [...womenProducts]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);

    setRandomProducts(selected);
  }, []);

  return (
    <>
      <Navbar />

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
                 <img src={ta} className="d-block w-100" alt="cloth" />
               </div>
     
               <div className="carousel-item">
                 <img src={to} className="d-block w-100" alt="cloth" />
               </div>
     
               <div className="carousel-item">
                 <img src={tt} className="d-block w-100" alt="cloth" />
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
      <h4 style={{ textAlign: "center", marginTop: "30px" }}>
        New Arrivals
      </h4>

      <div className="product">
        {randomProducts.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <span>₹{item.price}</span>
          </div>
        ))}
      </div>

      {/* Category Section */}
      <ProductSection gender="Women" />

      <Discount />

      {/* ALL PRODUCTS */}
      <div className="pro">
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          ALL PRODUCTS
        </h2>

        <div className="product2">
          {womenProducts.slice(0, 60).map(item => (
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

export default Women;
