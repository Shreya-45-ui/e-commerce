import { useEffect, useState } from "react";
import { getWishlist, removeFromWishlist } from "../Data/Wishlist";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

import "../style/wishlist.css";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    setWishlist(getWishlist());
  });

  const refresh = () => setWishlist(getWishlist());

  return (
    <>
      <Navbar />

      <div className="wishlist-container">
        <h2>My Wishlist</h2>

        {wishlist.length === 0 && <p>No items in wishlist</p>}

        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>

            <button
              onClick={() => {
                removeFromWishlist(item.id);
                refresh();
              }}
            >
              REMOVE
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Wishlist;