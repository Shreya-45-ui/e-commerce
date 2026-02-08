import '../style/Category.css'
import gown from '../assets/gown.jpg'
import jeans from '../assets/jeans.jpg'
import shirt from '../assets/shirt.jpg'
import skirt from '../assets/skirt.jpg'
import women from '../assets/women.jpg'
import Kurta from '../assets/boy.jpg'
import GirlGown from '../assets/Girl.jpg'
import { useNavigate } from 'react-router-dom'
const setCATEGORY = [
  { title: "Men's Jeans", image: jeans,path: "/men"  },
  { title: "Men's Sweaters", image: shirt ,path: "/men" },
  { title: "Women's Skirts", image: skirt,path: "/Women"  },
  { title: "women's Sweaters", image: women,path: "/Women" },
  { title: "Ball Gown", image: gown,path: "/Women" },
  { title: "Kurta-Punjama", image: Kurta,path:"/kids"},
  { title: "Girl-Gown", image: GirlGown,path:"/kids" },
  
];


function Category() {
  const navigate = useNavigate();
  return (
    <div className="category-container">
      <h2 className="category-heading">SHOP BY CATEGORY</h2>

      <div className="category-list">
        {setCATEGORY.map((item, index) => (
          <div className="category-card" key={index} onClick={() => navigate(item.path)}>
            <div className="category-image">
              <img src={item.image} alt={item.title} />
            </div>
            <p className="category-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
