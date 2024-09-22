import React, { useEffect, useState } from 'react';

const CategoryFilter = ({ setProducts }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetch categories from OpenFoodFacts API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://world.openfoodfacts.org/categories.json');
        const data = await response.json();
        setCategories(data.tags.slice(0, 20)); // Limit to 20 categories for simplicity
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    if (category) {
      try {
        const response = await fetch(`https://world.openfoodfacts.org/category/${category}.json`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    }
  };

  return (
    <div className="category-filter-container">
      <label className="category-filter-label">Select Category:</label>
      <select
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="input-field"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;

