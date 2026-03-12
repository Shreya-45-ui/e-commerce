import { useEffect, useState } from "react";
import {
  getCart,
  updateQuantity,
  removeFromCart
} from "../Data/Cart";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import "../style/bag.css";

function Bag() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.phone || !user.address) {
      alert("Please complete your My Account profile first");
      navigate("/account");
      return;
    }

    setCart(getCart());
  }, [navigate]);

  const refresh = () => setCart(getCart());

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="bag-container">
        <h2>My Bag</h2>

        {cart.length === 0 && <p>Your cart is empty</p>}

        {cart.map(item => (
          <div key={item.id + item.size} className="bag-item">
            <img src={item.image} alt={item.name} />

            <div className="cart-info">
              <h4>{item.name}</h4>

              <p>Size: {item.size}</p>

              <p>Price: ₹{item.price}</p>

              <div className="qty-box">
                <button
                  onClick={() => {
                    updateQuantity(item.id, item.size, "dec");
                    refresh();
                  }}
                  style={{color:"black"}}
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => {
                    updateQuantity(item.id, item.size, "inc");
                    refresh();
                  }}
                  style={{color:"black"}}
                >
                  +
                </button>
              </div>

              <p>Total: ₹{item.price * item.quantity}</p>

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

        <button
          className="buy-now-btn"
          onClick={() => {
            if (cart.length === 0) {
              alert("Your bag is empty");
              return;
            }
            navigate("/checkout");
          }}
        >
          BUY NOW
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Bag;