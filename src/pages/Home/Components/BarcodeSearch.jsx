import React, { useState } from 'react';

const BarcodeSearch = ({ setProducts }) => {
  const [barcode, setBarcode] = useState('');

  const handleBarcodeSearch = async () => {
    if (barcode) {
      try {
        const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
        const data = await response.json();
        if (data.product) {
          setProducts([data.product]); // Display the product by barcode
        } else {
          alert('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product by barcode:', error);
      }
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter barcode..."
        value={barcode}
        onChange={(e) => setBarcode(e.target.value)}
        className="input-field barcode-search"
      />
      <button onClick={handleBarcodeSearch} className="search-btn">
        Search by Barcode
      </button>
    </div>
  );
};

export default BarcodeSearch;
