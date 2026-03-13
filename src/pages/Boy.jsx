
import products from "../Data/Product.js";
import { useEffect, useState } from "react";
import "../style/men.css";
import ProductSection from "./ProductSection.jsx";
function Boys() {
  const [randomProducts, setRandomProducts] = useState([]);
 

  const boysProducts = products.filter(
    item => item.gender === "Boys"
  );

  useEffect(() => {
    const selected = [...boysProducts]
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

             
            </div>
          ))}
        </div>
      </div>
      <ProductSection  gender="Boys"/>
        </>
    )
}
export default Boys