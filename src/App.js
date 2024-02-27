import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Product from "./components/products/Product";
import Home from "./components/home/Home";
import CarsPage from "./components/carpage/CarsPage";

function App() {


  


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:model" element={<CarsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
