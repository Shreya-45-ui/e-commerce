import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import products from "../Data/Product";
import { addToCart } from "../Data/Cart";
import { addToWishlist } from "../Data/Wishlist";

import "../style/card.css";

function ProductDetail() {
  const { id } = useParams();
   const navigate = useNavigate();

  // ✅ Find product safely (string/number)
  const product = products.find((p) => p.id.toString() === id);

  // Debugging
  console.log("URL id:", id);
  console.log("Product found:", product);


  if (!product) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;

  const sizes = product.sizes || ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

 
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    addToCart(product, selectedSize);
    navigate("/bag")
    
  };

  
  const handleWishlist = () => {
    addToWishlist(product);
    navigate("/wishlist")
  };

  return (
    <>
      <Navbar/>

      <div className="product-details">
       
        <div className="image-section">
          <img src={product.image} alt={product.name} loading="lazy" />
        </div>

       
        <div className="info-section">
          <h2>{product.brand || "Fashion Hub"}</h2>
          <h3>{product.name}</h3>

          <div className="rating">⭐ {product.rating || 4.3} / 5</div>

          <button className="price">₹{product.price}</button>

          <h4>Select Size</h4>
          <div className="size-box">
            {sizes.map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "size active" : "size"}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <button className="add-to-bag" onClick={handleAddToCart}>
            ADD TO BAG
          </button>

          <button className="wishlist" onClick={handleWishlist}>
            WISHLIST
          </button>
<div className="product-desc">
   <p className="desc-text"> This product is crafted with premium-quality fabric to provide superior comfort and durability. Perfect for casual wear, office use, and daily styling. </p> 
   <ul className="desc-list"> 
    <li>100% Premium Cotton Fabric</li> 
    <li>Soft & breathable material</li> 
    <li>Regular fit for everyday comfort</li>
     <li>Machine wash, easy care</li> 
     <li>Made in India</li>
      </ul> 
</div>
          
        </div>
      </div>
      <Footer/>
      
    </>
  );
}

export default ProductDetail;
