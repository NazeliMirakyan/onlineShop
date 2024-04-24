import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home/Home";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Questions from "./pages/Questions/Questions";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
