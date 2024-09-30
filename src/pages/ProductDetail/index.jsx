import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProductList from '../../services/openFoodFactsAPI';
import './ProductDetailStyle.css'

const ProductDetail = () => {
  const { barcode } = useParams();
  const { fetchProductDetailByBarcode, productDetail } = useProductList();

  console.log("===>",productDetail);

  useEffect(() => {
    fetchProductDetailByBarcode(barcode);
  }, [barcode]);

  if (!productDetail) {
    return (<div className="loader-container">
    <div className="loader"></div>
  </div>);
  }

  return (
    <div className="product-detail">
      
      <div className='detail-img-div'>
      <img src={productDetail.image_url} alt={productDetail.product_name} className="product-detail-img" />
      </div>
      
      

      <div className='content-div'>
      <h1 className="text-2xl font-bold mb-4">{productDetail.product_name}</h1>
      <h2 className="text-xl font-semibold">Ingredients:</h2>
      <p>{productDetail.ingredients_text || 'Ingredients not available'}</p>

      <h2 className="text-xl font-semibold mt-4">Nutritional Information:</h2>
      <p>Energy: {productDetail.nutriments?.energy_value || 'N/A'} {productDetail.nutriments?.energy_unit || ''}</p>
      <p>Fat: {productDetail.nutriments?.fat_value || 'N/A'} g</p>
      <p>Carbohydrates: {productDetail.nutriments?.carbohydrates_value || 'N/A'} g</p>
      <p>Proteins: {productDetail.nutriments?.proteins_value || 'N/A'} g</p>

      <h2 className="text-xl font-semibold mt-4">Labels:</h2>
      <p>{productDetail.labels || 'No labels available'}</p>
      </div>
      
      

      
    </div>
  );
};

export default ProductDetail;
