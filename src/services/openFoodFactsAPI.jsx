import { useState, useEffect } from 'react';

const OpenFoodFactsAPI = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // Add searchQuery state
  const [category, setCategory] = useState(''); // If you want to implement category filter
  const [page, setPage] = useState(1); // Handle pagination

  const fetchProducts = async (query = '', category = '') => {
    setLoading(true);
    try {
      const endpoint = query
        ? `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&json=true`
        : category
          ? `https://world.openfoodfacts.org/category/${category}.json`
          : `https://world.openfoodfacts.org?page=${page}&json=true`;

      const response = await fetch(endpoint);
      const data = await response.json();
      console.log("result:", data);
      if (data.products) {
        setProducts(prevProducts => [...prevProducts, ...data.products]); // Append new products
      } else {
        setProducts([]); // Clear products if no data
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch products when searchQuery changes
  useEffect(() => {
    setProducts([]); // Clear previous products when a new search is made
    fetchProducts(searchQuery, category);
  }, [searchQuery, category, page]);

  // Load more products for infinite scroll
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return {
    products,
    loading,
    loadMore,
    setSearchQuery, // Allow setting the search query from outside
    setCategory, // Allow setting the category from outside
  };
};

export default OpenFoodFactsAPI;
