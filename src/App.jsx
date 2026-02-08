import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import ProductDetail from "./pages/ProductDetail";
import Bag from "./pages/Bag";
import Wishlist from "./pages/Wishlist";
import About from "./Content/About";
import BestSeller from "./pages/BestSeller";
import Account from "./Content/Account";
import HelpFAQ from "./Content/HelpFAQ";
import TermsOfUse from "./Content/TermsOfUse";
import StorePickup from "./Content/storePickup";
import ShippingPolicy from "./Content/ShippingPolicy";
import PrivacyPolicy from "./Content/PrivacyPolicy";
import GiftReturn from "./Content/GiftReturn";
import StoreLocator from "./Content/StoreLocator";

import ContactUs from "./Content/ContactUs";
import RiseRewards from "./Content/RiseReward";
import Career from "./Content/Career";
import Sustainability from "./Content/Sustainability";
import FilterPage from "./components/FilterPage";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/filter" element={<FilterPage/>} /> 
        <Route path="/category" element={<Category />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/best" element={<BestSeller />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/help" element={<HelpFAQ />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/store" element={<StorePickup />} />
        <Route path="/shopping" element={<ShippingPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/return" element={<GiftReturn />} />
        <Route path="/store-locator" element={<StoreLocator />} />
        <Route path="/rise-rewards" element={<RiseRewards/>} />
        <Route path="/sustainability" element={<Sustainability/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/contact-us" element={<ContactUs/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;