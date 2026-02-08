import { useNavigate } from "react-router-dom";
import Category from "../Data/Category";
import products from "../Data/Product";
import "../style/ProductSection.css";

function ProductSection({ gender }) {
  const navigate = useNavigate();

 
  const normalize = (text = "") =>
    text
      .toLowerCase()
      .replace(/[-_]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  
  const genderProducts = products.filter(
    item => normalize(item.gender) === normalize(gender)
  );

 
  const getCategoryProducts = (keywords) =>
    genderProducts.filter(item =>
      keywords.some(key =>
        normalize(item.name).includes(normalize(key))
      )
    );

  return (
    <>
    
      {Object.entries(Category).map(([title, keywords]) => {
        const list = getCategoryProducts(keywords).slice(0, 5); 

        if (list.length === 0) return null;

        return (
          <div key={title} className="category-block">
            <h2 className="category-title">{title}</h2>

            <div className="product-row">
              {list.map(item => (
                <div
                  key={item.id}
                  className="product-card"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductSection;
