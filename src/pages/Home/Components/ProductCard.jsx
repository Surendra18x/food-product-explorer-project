import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image_url} alt={product.product_name} />
      <h2>{product.product_name}</h2>
      <p>Category: {product.categories}</p>
      <p>Nutrition Grade: {product.nutrition_grade}</p>
    </div>
  );
};

export default ProductCard;
