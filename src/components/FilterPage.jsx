import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import productsData from "../Data/Product";
import Category from "../Data/Category";
import "../style/filter.css";

function FilterPage() {
  const location = useLocation();
  const { category, gender, minPrice, maxPrice } = location.state || {};

  let filteredProducts = productsData;

  const isFilterUsed = category || gender || (minPrice !== undefined) || (maxPrice !== undefined);

  // Category filter
  if (category) {
    const subCategoryArray = Category[category] || [];
    filteredProducts = filteredProducts.filter(p =>
      subCategoryArray.includes(p.name)
    );
  }

  // Gender filter
  if (gender) {
    filteredProducts = filteredProducts.filter(p => p.gender === gender);
  }

  // Min price filter
  if (minPrice !== undefined && Number(minPrice) >= 0) {
    filteredProducts = filteredProducts.filter(p => p.price >= Number(minPrice));
  }

  // Max price filter
  if (maxPrice !== undefined && Number(maxPrice) >= 0) {
    filteredProducts = filteredProducts.filter(p => p.price <= Number(maxPrice));
  }

  return (
    <div>
      <Navbar />

      {isFilterUsed && filteredProducts.length === 0 ? (
        <div className="no-products">
          <p>No products found matching your filter.</p>
        </div>
      ) : (
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
      )}
    </div>
  );

  function getCategory(productName) {
    const found = Object.keys(Category).find(cat =>
      Category[cat].includes(productName)
    );
    return found || "Unknown";
  }
}

export default FilterPage;