import React, {useEffect} from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import NotFound from "./Pages/NotFound"
import Footer from "./Components/Footer/Footer"
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import kid_banner from "./Components/Assets/banner_kids.png"
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 700,
          easing: "ease-in",
          delay: 100
        })
      })
  return(
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<LoginSignup  />}></Route>
        <Route path="/men" element={<ShopCategory banner={men_banner}  category={"men"} />}></Route>
        <Route path="/women" element={<ShopCategory banner={women_banner} category={"women"} />}></Route>
        <Route path="/kid" element={<ShopCategory banner={kid_banner} category={"kid"} />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;



