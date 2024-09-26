import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  return (
    <Link key={product.id} to={`/product/${product.id}`} className="product-card">
      <div className="content-wrapper">
        <div className="img_div">
          <img src={product.image_url ? product.image_url : 'https://via.placeholder.com/150'}
            alt={product.product_name || "Product Image"} />
        </div>
        <h2>{product.product_name}</h2>
        <p><b>Category:</b> <br /> {product.categories?.replaceAll(",", ", ").slice(0, 80)}
        </p>
      </div>
      <div className="nutrition-grade">Nutrition Grade: {product.nutrition_grades.toUpperCase()}</div>
    </Link>
  );

};

export default ProductCard;
