import Navbar from "../components/Navbar"
import products from "../Data/Product.js";
import Boys from "./Boy"
import la from '../assets/k1.jpg'
import lb from '../assets/k2.jpg'
import lc from '../assets/k3.jpg'
import Girl from "./Girl"
import '../style/Kid.css'
import { addToCart } from "../Data/Cart";
import { useNavigate } from "react-router-dom"
import Discount from "./Discount.jsx";
import Footer from "../components/Footer.jsx";
function Kids() {
  const navigate=useNavigate()
  const boys = products.filter(p => p.gender === "Boys");
  const girls = products.filter(p => p.gender === "Girls");
   const handleAddToBag = (item) => {
    addToCart(item);
    navigate("/Bag")
    
  };

    return(
        <>
        <Navbar/>
         <div
                 id="carouselExample"
                 className="carousel slide"
                 data-bs-ride="carousel"
               >
                 <div className="carousel-indicators">
                   <button data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
                   <button data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
                   <button data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
                 </div>
         
                
                 <div className="carousel-inner">
                   <div className="carousel-item active">
                     <img src={la} className="d-block w-100" alt="cloth" />
                   </div>
         
                   <div className="carousel-item">
                     <img src={lb} className="d-block w-100" alt="cloth" />
                   </div>
         
                   <div className="carousel-item">
                     <img src={lc} className="d-block w-100" alt="cloth" />
                   </div>
                 </div>
         
                
                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                   <span className="carousel-control-prev-icon"></span>
                 </button>
         
                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                   <span className="carousel-control-next-icon"></span>
                 </button>
               </div>
        <h2 style={{textAlign:"center",fontSize:"25px",fontWeight:"bold",marginTop:"20px"}}>Boys Section</h2>
        <Boys/>
        <h2 style={{textAlign:"center",fontSize:"25px",fontWeight:"bold",marginTop:"20px"}}>Girls Section</h2>
        <Girl/>
               <Discount/>

           <h2>Boys Collection</h2>
      <div className="cls">
        {boys.slice(0,20).map(item => (
          <div className="ca" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button onClick={() => handleAddToBag(item)}>
              Add to Bag
            </button>
          </div>
          
        ))}
      </div>

      <h2>Girls Collection</h2>
      <div className="cls">
        {girls.slice(0,20).map(item => (
          <div className="ca" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <button onClick={() => handleAddToBag(item)}>
              Add to Bag
            </button>
          </div>
        ))}
      </div>
      <Footer/>
        </>
    )
}
export default Kids