import OffcanvasExample from "./Design/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Design/Home/Home";
import AboutUs from "./Design/ContactUs";
import Discover from "./Design/Discover/Discover";
import MyCart from "./Design/MyCart";
import DiscountOffer from "./Design/DiscountOffer";
import NewArrival from "./Design/NewArrival";
import Footer from "./Design/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <OffcanvasExample />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/discover" element={<Discover />}></Route>
        <Route path="/contactus" element={<AboutUs />}></Route>
        <Route path="/mycart" element={<MyCart />}></Route>
        <Route path="/discount" element={<DiscountOffer />}></Route>
        <Route path="/arrivals" element={<NewArrival />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
