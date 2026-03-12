import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { FaCreditCard, FaMoneyBillWave, FaMobileAlt } from "react-icons/fa";

function Checkout() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const [payment, setPayment] = useState("COD");
  const [showPopup, setShowPopup] = useState(false);

  const total = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return sum + price * quantity;
  }, 0);

  const placeOrder = () => {
    setShowPopup(true);
    localStorage.removeItem("cart");
  };

  const cardStyle = {
    borderRadius: "12px",
    padding: "25px",
    marginBottom: "25px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    background: "#fff",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const buttonStyle = {
    padding: "14px",
    width: "100%",
    background: "linear-gradient(90deg, #4CAF50, #45a049)",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  };

  const paymentOptionStyle = (active) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 15px",
    marginBottom: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    border: active ? "2px solid #4CAF50" : "1px solid #ccc",
    background: active ? "rgba(76, 175, 80, 0.1)" : "#f9f9f9",
    transition: "all 0.3s",
  });

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "900px",
          margin: "50px auto",
          padding: "20px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#333",
            background: "linear-gradient(90deg, #4CAF50, #45a049)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Checkout
        </h2>

        {/* Delivery Details */}
        <div
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
          }}
        >
          <h3
            style={{
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
              marginBottom: "15px",
              color: "#555",
            }}
          >
            Delivery Details
          </h3>
          <p>
            <b>Name:</b> {user.username}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
          <p>
            <b>Phone:</b> {user.phone}
          </p>
          <p>
            <b>Address:</b> {user.address}
          </p>
        </div>

        {/* Order Summary */}
        <div
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
          }}
        >
          <h3
            style={{
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
              marginBottom: "15px",
              color: "#555",
            }}
          >
            Order Summary
          </h3>

          {cart.map((item) => {
            const price = Number(item.price) || 0;
            const quantity = Number(item.quantity) || 0;

            return (
              <div
                key={`${item.id}-${item.size}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                  fontWeight: "500",
                  color: "#444",
                }}
              >
                <span>
                  {item.name} ({item.size}) x {quantity}
                </span>
                <span>₹{price * quantity}</span>
              </div>
            );
          })}

          <h3
            style={{
              borderTop: "1px solid #eee",
              paddingTop: "10px",
              marginTop: "15px",
              textAlign: "right",
            }}
          >
            Total: ₹{total}
          </h3>
        </div>

        {/* Payment Method */}
        <div
          style={cardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
          }}
        >
          <h3
            style={{
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
              marginBottom: "15px",
              color: "#555",
            }}
          >
            Payment Method
          </h3>

          <div
            style={paymentOptionStyle(payment === "COD")}
            onClick={() => setPayment("COD")}
          >
            <FaMoneyBillWave /> Cash on Delivery
          </div>

          <div
            style={paymentOptionStyle(payment === "UPI")}
            onClick={() => setPayment("UPI")}
          >
            <FaMobileAlt /> UPI Payment
          </div>

          <div
            style={paymentOptionStyle(payment === "Card")}
            onClick={() => setPayment("Card")}
          >
            <FaCreditCard /> Debit / Credit Card
          </div>

          <button
            onClick={placeOrder}
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            PLACE ORDER
          </button>
        </div>
      </div>

      {/* Order Success Popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "35px",
              borderRadius: "15px",
              textAlign: "center",
              width: "400px",
              boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
              transform: "scale(0.8)",
              animation: "popupAnimation 0.3s forwards",
            }}
          >
            <h2
              style={{
                color: "#4CAF50",
                marginBottom: "15px",
              }}
            >
              🎉 Congratulations!
            </h2>
            <p style={{ marginBottom: "20px" }}>
              Your order has been placed successfully.
            </p>

            <h4 style={{ marginBottom: "10px", color: "#555" }}>User Details</h4>
            <p>{user.username}</p>
            <p>{user.phone}</p>
            <p>{user.address}</p>

            <p>
              <b>Payment:</b> {payment}
            </p>

            <button
              onClick={() => navigate("/home")}
              style={{
                marginTop: "20px",
                padding: "12px 25px",
                background: "#333",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "8px",
                fontWeight: "bold",
                transition: "all 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#555")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#333")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      <Footer />

      <style>
        {`
        @keyframes popupAnimation {
          to { transform: scale(1); }
        }

        @media (max-width: 768px) {
          div[style*="maxWidth: '900px'"] {
            padding: 15px;
            margin: 20px auto;
          }

          div[style*="width: '400px'"] {
            width: 90%;
          }
        }
        `}
      </style>
    </>
  );
}

export default Checkout;