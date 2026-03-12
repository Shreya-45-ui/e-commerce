import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../style/notfound.css";

function NotFound() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="notfound-container">

        <div className="notfound-box">

          <h1 className="error-code">404</h1>

          <h2>Oops! Page Not Found</h2>

          <p>
            The product or page you are looking for does not exist.
            Try searching again or continue shopping.
          </p>

          <div className="btn-group">

            <button
              className="home-btn"
              onClick={() => navigate("/")}
            >
              🏠 Go Home
            </button>

            <button
              className="shop-btn"
              onClick={() => navigate("/home")}
            >
              🛍 Continue Shopping
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default NotFound;