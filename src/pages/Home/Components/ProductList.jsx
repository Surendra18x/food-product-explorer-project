import React, { useState } from "react";
import ProductCard from "./ProductCard";
import './HomeStyle.css'
import useProductList from "../../../services/openFoodFactsAPI";

const ProductList = ({ products, isLoading,setPage, hasMore }) => {


  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return !isLoading ? (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
      {hasMore && !isLoading && (
      <button onClick={handleLoadMore} className="load-more-btn">
        Load More
      </button>
    )}
    </div>
    
  ) : (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default ProductList;

