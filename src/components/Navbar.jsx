import "../style/navbar.css";
import Nexora from "../assets/Nexoralogo.png";
import { Heart, LogOut, Menu, Search, ShoppingBagIcon, User, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import products from "../Data/Product";
import Category from "../Data/Category";

function Navbar() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [userName, setUserName] = useState("");

  // Temp filter states
  const [tempCategory, setTempCategory] = useState("");
  const [tempGender, setTempGender] = useState("");
  const [tempMinPrice, setTempMinPrice] = useState("");
  const [tempMaxPrice, setTempMaxPrice] = useState("");

  const navigate = useNavigate();
  const filteredProducts = query.trim()
    ? products.filter((item) =>
        (
          item.name +
          item.brand +
          item.gender
        )
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    const storedData = localStorage.getItem("user");
    if (storedData) {
      const userObject = JSON.parse(storedData);
      setUserName(userObject.username);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUserName("");
    navigate("/");
  };

  const handleFilter = () => {
    // Navigate to /filter with state
    navigate("/filter", {
      state: {
        category: tempCategory,
        gender: tempGender,
        minPrice: tempMinPrice,
        maxPrice: tempMaxPrice
      }
    });

    setFilterOpen(false);
  };

  return (
    <div className="nav">
      <div className="nav1">
        {/* Logo */}
        <div className="nav-item logo-box">
          <NavLink to={"/home"}>
            <img src={Nexora} className="logo" alt="logo" />
          </NavLink>
        </div>

        {/* Menu Links */}
        <div className={`nav-item section ${menuOpen ? "open" : ""}`}>
          <NavLink to={"/men"}><span>MEN</span></NavLink>
          <NavLink to={"/women"}><span>WOMEN</span></NavLink>
          <NavLink to={"/kids"}><span>KIDS</span></NavLink>
          <NavLink to={"/best"}><span>BEST SELLER</span></NavLink>
          <NavLink to={"/about"}><span>ABOUT US</span></NavLink>
        </div>

        {/* Search */}
        <div className="nav-item search"  style={{ position: "relative" }}>
          <Search size={16} />
          <input type="text" placeholder="Search for products"  value={query}
            onChange={(e) => setQuery(e.target.value)} />
            {query && (
            <div className="search-results">
              {filteredProducts.length === 0 ? (
                <p className="no-result">No products found</p>
              ) : (
                filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    className="search-item"
                    onClick={() => {
                      navigate(`/product/${item.id}`);
                      setQuery("");
                    }}
                  >
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p>{item.name}</p>
                      <small>{item.brand} • {item.gender}</small>
                      <br />
                      <strong>₹{item.price}</strong>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        
        <div className="nav-item user-icons">
          
          <div className="icon-box">
            <NavLink to={"/wishlist"}><Heart className="user-icon" /></NavLink>
            <span>Wishlist</span>
          </div>
          <div className="icon-box">
            <NavLink to={"/bag"}><ShoppingBagIcon className="user-icon" /></NavLink>
            <span>Bag</span>
          </div>
          
          
        

        {/* Filter Dropdown */}
        <div className="nav-item filter-dropdown">
          <button onClick={() => setFilterOpen(!filterOpen)} className="filter-btn">
            Filter <ChevronDown size={16} />
          </button>

          {filterOpen && (
            <div className="filter-panel">
              {/* Category */}
              <select value={tempCategory} onChange={e => setTempCategory(e.target.value)}>
                <option value="">All Categories</option>
                {Object.keys(Category).map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>

              {/* Gender */}
              <select value={tempGender} onChange={e => setTempGender(e.target.value)}>
                <option value="">All Genders</option>
                <option value="Boys">Men</option>
                <option value="Girls">Women</option>
                <option value="Boys">Boys</option>
                <option value="Girls">Girls</option>
              </select>

              {/* Price */}
              <input
                type="number"
                placeholder="Min Price"
                value={tempMinPrice}
                onChange={e => setTempMinPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max Price"
                value={tempMaxPrice}
                onChange={e => setTempMaxPrice(e.target.value)}
              />

              {/* Apply Button navigates to FilterPage */}
              <button onClick={handleFilter}>Apply</button>
            </div>
          )}

        </div>
        <div className="icon-box">
           <NavLink to={"/account"}><User className="user-icon" /></NavLink> 
            <span style={{ fontWeight: "bold", color: "#52569c", fontSize: "14px" }}>{userName}</span>
          </div>
        <div className="icon-box" onClick={logout}>
            <LogOut className="user-icon" />
            <span>Logout</span>
          </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={28} />
          </div>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
