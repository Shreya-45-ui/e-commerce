import "../style/navbar.css";
import Nexora from "../assets/Nexoralogo.png";
import { Heart, Menu, Search, ShoppingBag, ShoppingBagIcon, User } from "lucide-react";
import { useState } from "react";


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className="nav">

                <div className="nav1">
                    <img src={Nexora} className="logo" alt="logo" />


                    <div className={`section ${menuOpen ? "open" : ""}`}>
                        <a href="#"><span>MEN</span></a>
                        <a href="#"><span>WOMEN</span></a>
                        <a href="#"><span>KIDS</span></a>
                        <a href="#"><span>WOOLLEN</span></a>
                        <a href="#"><span>BEST PRODUCTS</span></a>
                    </div>

                    <div className="search">
                        <Search size={16} /><input type="text" placeholder="Search for products" />

                    </div>

                    <div className="user">
                        <div className="icon-box">
                            <User className="user-icon" />
                            <span>User</span>
                        </div>

                        <div className="icon-box">
                            <Heart className="user-icon" />
                            <span>Wishlist</span>
                        </div>

                        <div className="icon-box">
                            <ShoppingBagIcon className="user-icon" />
                            <span>Bag</span>
                        </div>
                        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                            <Menu size={28} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
