import { useEffect, useState } from "react";
import "../style/wishlist.css";
import {
  getCart,
  updateQuantity,
  removeFromCart
} from "../Data/Cart";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Bag() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const refresh = () => setCart(getCart());

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.totalPrice,
    0
  );


  return (
    <>
      <Navbar />

      <div className="wishlist-container">
        <h2>My Bag</h2>

        {cart.length === 0 && <p>Your cart is empty</p>}

        {cart.map(item => (
          <div key={item.id + item.size} className="wishlist-item">
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h4>{item.name}</h4>
              <p>Size: {item.size}</p>
              <p>₹{item.price}</p>

              <div className="qty-box">
                <button onClick={() => {
                  updateQuantity(item.id, item.size, "dec");
                  refresh();
                }}>-</button>

                <span>{item.quantity}</span>

                <button onClick={() => {
                  updateQuantity(item.id, item.size, "inc");
                  refresh();
                }}>+</button>
              </div>

              <p>Total: ₹{item.totalPrice}</p>

              <button
                className="remove"
                onClick={() => {
                  removeFromCart(item.id, item.size);
                  refresh();
                }}
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}
         <h3 className="text">Total Amount: ₹{totalAmount}</h3>
        <button className="buy-now-btn">
              BUY NOW
            </button>
      </div>

      <Footer />
    </>
  );
}

export default Bag;
