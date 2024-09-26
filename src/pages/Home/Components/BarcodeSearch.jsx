import React, { useState } from 'react';

const BarcodeSearch = ({ barcode, setBarcode, searchByBarcode }) => {
  const handleBarcodeSearch = () => {
    searchByBarcode(barcode)
  }

  const handleChange = (value) => {
    setBarcode(value)
  }


  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Enter barcode..."
        value={barcode}
        onChange={(e) => handleChange(e.target.value)}
        className="input-field"
      />
      <button onClick={handleBarcodeSearch} className="search-btn">
        Search by Barcode
      </button>
    </div>
  );
};

export default BarcodeSearch;
