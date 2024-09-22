import React, { useState } from 'react';

const SortOptions = ({ products, setProducts }) => {
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSortOption(selectedSort);
    let sortedProducts = [...products];

    if (selectedSort === 'name-asc') {
      sortedProducts.sort((a, b) => a.product_name.localeCompare(b.product_name));
    } else if (selectedSort === 'name-desc') {
      sortedProducts.sort((a, b) => b.product_name.localeCompare(a.product_name));
    } else if (selectedSort === 'nutrition-asc') {
      sortedProducts.sort((a, b) => (a.nutrition_grades || '').localeCompare(b.nutrition_grades || ''));
    } else if (selectedSort === 'nutrition-desc') {
      sortedProducts.sort((a, b) => (b.nutrition_grades || '').localeCompare(a.nutrition_grades || ''));
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="sort-options-container">
      <label className="sort-label">Sort By:</label>
      <select
        value={sortOption}
        onChange={handleSortChange}
        className="sort-dropdown"
      >
        <option value="">Select</option>
        <option value="name-asc">Product Name (A-Z)</option>
        <option value="name-desc">Product Name (Z-A)</option>
        <option value="nutrition-asc">Nutrition Grade (Ascending)</option>
        <option value="nutrition-desc">Nutrition Grade (Descending)</option>
      </select>
    </div>
  );
};

export default SortOptions;
