import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import NotFound from "./Pages/NotFound"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return(
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<LoginSignup  />}></Route>
        <Route path="/men" element={<ShopCategory category={"men"} />}></Route>
        <Route path="/women" element={<ShopCategory category={"women"} />}></Route>
        <Route path="/kid" element={<ShopCategory category={"kid"} />}></Route>
        <Route path="product/:id" element={<Product />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;



