import React, { useState, useEffect } from "react";
// import './style.css';
// import { Home } from "./pages/Home/Components/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OpenFoodFactsAPI from "./services/openFoodFactsAPI";
import ProductList from "./pages/Home/Components/ProductList";
import Header from "./pages/Home/Components/header";
import useProductList from "./services/openFoodFactsAPI";
import ProductCard from "./pages/Home/Components/ProductCard";
import SearchBar from "./pages/Home/Components/SearchBar";
import BarcodeSearch from "./pages/Home/Components/BarcodeSearch";
import ProductDetail from "./pages/Home/Components/ProductDetailPage";



function App() {

  const { products, isLoading, searchProducts, input, setInput, searchByBarcode, barcode, setBarcode, setIsLoading, setPage, hasMore } = useProductList()

  


  return (
    <Router>
      <>
        <header className="header">
          <h1 class="highlighted-text-shadow">
            Food<br />
            Product<br />
            Explorer
          </h1>
          {/* Pass props for search functionality */}
          <SearchBar
            searchProducts={searchProducts}
            input={input}
            setInput={setInput}
            setIsLoading={setIsLoading}
          />
          {/* Barcode search functionality */}
          <BarcodeSearch
            barcode={barcode}
            setBarcode={setBarcode}
            searchByBarcode={searchByBarcode}
          />
        </header>

        {/* Define Routes for Product List and Product Detail */}
        <Routes>
          {/* Product List Route */}
          <Route
            path="/"
            element={<ProductList products={products} isLoading={isLoading} setPage={setPage} hasMore={hasMore} />}
          />
          {/* Product Detail Route */}
          <Route
            path="/product/:barcode"
            element={<ProductDetail />}
          />
        </Routes>
        

      </>
    </Router>
  )
}

export default App
