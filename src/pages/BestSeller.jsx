import { useEffect, useState } from "react";
import products from "../Data/Product.js"; 
import Navbar from "../components/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import "../style/home.css";
import "../style/men.css";
import Footer from "../components/Footer";

function BestSeller() {
   const navigate = useNavigate();
  const [randomProducts, setRandomProducts] = useState([]);
    const menProducts = products.filter(
    item => item.gender === "Men"
  );
  useEffect(() => {
      const selected = [...menProducts]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

      setRandomProducts(selected);
    }, []);
    //   Women
    const [ranProducts, setRanProducts] = useState([]);
    const womenProducts = products.filter(
    item => item.gender === "Women"
  );
    useEffect(() => {
      const sele = [...womenProducts]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
  
      setRanProducts(sele);
    }, []);
    // Boys
    const [boyProducts, setboyProducts] = useState([]);
    const BoysProducts = products.filter(
    item => item.gender === "Boys"
  );
    useEffect(() => {
      const se = [...BoysProducts]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
  
      setboyProducts(se);
    }, []);
    // Girls
    const [girlProducts, setgirlProducts] = useState([]);
    const girlsProducts = products.filter(
    item => item.gender === "Girls"
  );
    useEffect(() => {
      const s = [...girlsProducts]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
  
      setgirlProducts(s);
    }, []);
    return(

    <>
    <Navbar/>
    <h1 style={{ textAlign: "center", marginTop: "100px" }}>Best Seller Of Our Website</h1>
    {/* for men section */}
          <div style={{ marginTop: "30px" }}>
        <h4><NavLink to={"/men"}> Men Products</NavLink></h4>

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
      {/* women */}
                <div style={{ marginTop: "30px" }}>
        <h4><NavLink to={"/women"}>Women Products</NavLink></h4>

        <div className="product">
          {ranProducts.map(item => (
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
      {/* kids section */}
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>For Kids</h1>
       <div style={{ marginTop: "30px" }}>
        <h4><NavLink to={"/kids"}>Boys Products</NavLink></h4>

        <div className="product">
          {boyProducts.map(item => (
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
      {/* Girls */}
             <div style={{ marginTop: "30px" }}>
        <h4><NavLink to={"/kids"}>Girls Products</NavLink></h4>

        <div className="product">
          {girlProducts.map(item => (
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
      
      <Footer/>

    </>
)}
export default BestSeller