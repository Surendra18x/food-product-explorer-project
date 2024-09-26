import React, { useState } from "react";
import ProductCard from "./ProductCard";
import './HomeStyle.css'


const ProductList = ({ products, isLoading,setPage, hasMore }) => {


  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return !isLoading ? (
    <div>
      <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id || product.barcode} product={product} />
      ))}
      
    </div>
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

