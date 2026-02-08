

import products from "../Data/Product.js";
import { useEffect, useState } from "react";
import "../style/men.css";
import ProductSection from "./ProductSection";

function Girl() {
 const [randomProducts, setRandomProducts] = useState([]);
 

  const GirlProducts = products.filter(
    item => item.gender === "Girls"
  );

  useEffect(() => {
    const selected = [...GirlProducts]
      .sort(() => Math.random() - 0.5)
      .slice(0, 5);

    setRandomProducts(selected);
  }, []);
    return(
        <>
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
      <ProductSection  gender="Girls"/>
        </>
    )
}
export default Girl