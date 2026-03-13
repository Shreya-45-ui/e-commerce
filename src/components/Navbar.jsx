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

  const [tempCategory, setTempCategory] = useState("");
  const [tempGender, setTempGender] = useState("");
  const [tempMinPrice, setTempMinPrice] = useState("");
  const [tempMaxPrice, setTempMaxPrice] = useState("");

  const navigate = useNavigate();

  const filteredProducts = query.trim()
    ? products.filter((item) =>
        (item.name + item.brand + item.gender).toLowerCase().includes(query.toLowerCase())
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
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const handleFilter = () => {
    navigate("/filter", {
      state: {
        category: tempCategory,
        gender: tempGender,
        minPrice: tempMinPrice,
        maxPrice: tempMaxPrice,
      },
    });
    setFilterOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container-fluid">
        <div className="d-flex align-items-center w-100">
          
          {/* Logo - Left side */}
          <NavLink to={"/home"} className="navbar-brand me-3 flex-shrink-0">
            <img src={Nexora} alt="logo" style={{ width: "140px", height: "50px" }} />
          </NavLink>

          {/* Search - Center (flex-grow) */}
          <div className="position-relative flex-grow-1 mx-3">
            <Search size={16} className="position-absolute" style={{ left: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 2 }} />
            <input
              type="text"
              placeholder="Search for products"
              className="form-control ps-5"
              style={{ height: "48px" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <div className="search-results position-absolute w-100 shadow" style={{ top: "100%", left: 0, zIndex: 1000 }}>
                {filteredProducts.length === 0 ? (
                  <p className="no-result p-2 mb-0">No products found</p>
                ) : (
                  filteredProducts.map((item) => (
                    <div
                      key={item.id}
                      className="search-item p-2 border-bottom"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate(`/product/${item.id}`);
                        setQuery("");
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <img src={item.image} alt={item.name} style={{ width: "40px", height: "40px", objectFit: "cover", marginRight: "10px" }} />
                        <div>
                          <p className="mb-0 small fw-bold">{item.name}</p>
                          <small className="text-muted">{item.brand} • {item.gender}</small>
                          <br />
                          <strong className="text-primary">₹{item.price}</strong>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Hamburger - Right side */}
          <button
            className="navbar-toggler flex-shrink-0 p-2 border-0"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ height: "48px" }}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse mt-2 mt-lg-0 ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {/* Menu Links */}
            <li className="nav-item"><NavLink to={"/men"} className="nav-link">MEN</NavLink></li>
            <li className="nav-item"><NavLink to={"/women"} className="nav-link">WOMEN</NavLink></li>
            <li className="nav-item"><NavLink to={"/kids"} className="nav-link">KIDS</NavLink></li>
            <li className="nav-item"><NavLink to={"/best"} className="nav-link">BEST SELLER</NavLink></li>
            <li className="nav-item"><NavLink to={"/about"} className="nav-link">ABOUT</NavLink></li>

            {/* Filter Dropdown */}
            <li className="nav-item dropdown my-2">
              <button className="btn filter-btn dropdown-toggle w-100" onClick={() => setFilterOpen(!filterOpen)}>
                Filter <ChevronDown size={16} />
              </button>
              {filterOpen && (
                <div className="filter-panel dropdown-menu show p-3 w-100">
                  <select value={tempCategory} onChange={e => setTempCategory(e.target.value)} className="form-select mb-2">
                    <option value="">All Categories</option>
                    {Object.keys(Category).map((cat, idx) => (
                      <option key={idx} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <select value={tempGender} onChange={e => setTempGender(e.target.value)} className="form-select mb-2">
                    <option value="">All Genders</option>
                    <option value="Boys">Men</option>
                    <option value="Girls">Women</option>
                    <option value="Boys">Boys</option>
                    <option value="Girls">Girls</option>
                  </select>
                  <input type="number" placeholder="Min Price" value={tempMinPrice} min={0} onChange={e => setTempMinPrice(Math.max(0, e.target.value))} className="form-control mb-2" />
                  <input type="number" placeholder="Max Price" value={tempMaxPrice} min={0} onChange={e => setTempMaxPrice(Math.max(0, e.target.value))} className="form-control mb-2" />
                  <button className="btn btn-primary w-100" onClick={() => {
    if (!tempMinPrice && !tempMaxPrice && !tempCategory && !tempGender) {
      alert("Please select at least one filter option");
      return;
    }
    handleFilter();
  }}>Apply</button>
                </div>
              )}
            </li>

            {/* User Icons */}
            <li className="nav-item d-flex align-items-center mt-2 mt-lg-0">
              <NavLink to={"/wishlist"} className="nav-link d-flex flex-column align-items-center">
                <Heart className="user-icon" />
                <span>Wishlist</span>
              </NavLink>
              <NavLink to={"/bag"} className="nav-link d-flex flex-column align-items-center">
                <ShoppingBagIcon className="user-icon" />
                <span>Bag</span>
              </NavLink>
              <NavLink to={"/account"} className="nav-link d-flex flex-column align-items-center">
                <User className="user-icon" />
                <span style={{ fontWeight: "bold", color: "#52569c", fontSize: "14px" }}>{userName}</span>
              </NavLink>
              <span className="nav-link d-flex flex-column align-items-center" style={{ cursor: "pointer" }} onClick={logout}>
                <LogOut className="user-icon" />
                <span>Logout</span>
              </span>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;