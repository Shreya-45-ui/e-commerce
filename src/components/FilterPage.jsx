import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import productsData from "../Data/Product";
import Category from "../Data/Category";
import "../style/filter.css";

function FilterPage() {

  const location = useLocation();
  const { category, gender, minPrice, maxPrice } = location.state || {};

  let filteredProducts = productsData;

  const isFilterUsed = category || gender || minPrice || maxPrice;

  if (category) {
    const subCategoryArray = Category[category] || [];
    filteredProducts = filteredProducts.filter(p =>
      subCategoryArray.includes(p.name)
    );
  }

  if (gender) {
    filteredProducts = filteredProducts.filter(p => p.gender === gender);
  }

  if (minPrice) {
    filteredProducts = filteredProducts.filter(
      p => p.price >= Number(minPrice)
    );
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter(
      p => p.price <= Number(maxPrice)
    );
  }

 
  if (isFilterUsed && filteredProducts.length === 0) {
    return <Navigate to="/404" />;
  }

  const getCategory = (productName) => {
    const found = Object.keys(Category).find(cat =>
      Category[cat].includes(productName)
    );
    return found || "Unknown";
  };

  return (
    <div>
      <Navbar />

      <div className="product-grid">
        {filteredProducts.map((p, index) => (
          <div key={p.id + "-" + index} className="product-card">
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>
            <p>{p.gender}</p>
            <p>Category: {getCategory(p.name)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterPage;