import { useState, useEffect } from 'react';

const useProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [barcode, setBarcode] = useState([]);
  const [productDetail, setProductDetail] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [Categories, setCategory] = useState([]);

  const fetchProducts = async (page = 0) => {
    setIsLoading(true);
    const response = await fetch(
      `https://world.openfoodfacts.org/${page}?json=true`
    );
    const data = await response.json();
    if (data.products.length === 0) {
      setHasMore(false);
    } else {
      setProducts((prev) => [...prev, ...data.products]);
    }
    setIsLoading(false);
  };

  const searchProducts = async (input) => {
    setIsLoading(true);
    const response = await fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${input}&json=true`
    );
    const data = await response.json();
    setProducts(data.products);
    setIsLoading(false);
  };

  const searchByBarcode = async (barcode) => {
    setIsLoading(true);
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    );
    const data = await response.json();
    setProducts([data.product]);
    setIsLoading(false);
  };

  const fetchProductDetailByBarcode = async (barcode) => {
    setIsLoading(true);
    console.log("===> called", barcode)
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    );
    const data = await response.json();
    setProductDetail(data.product);
    setIsLoading(false);
  };

  const fetchCategories = async (category) => {
    const response = await fetch(
      "https://world.openfoodfacts.org/categories.json"
    );
    const data = await response.json();
    const categoryNames = data.tags.map((category) => category.name);
    setCategory(categoryNames);
  };

  const fetchProductsByCategory = async (category) => {
    setIsLoading(true);
    const response = await fetch(
      `https://world.openfoodfacts.org/category/${category}.json`
    );
    const data = await response.json();
    setProducts(data.products);
    console.log("product: ", data.products);
    setIsLoading(false);
  };

  useEffect(() => {
    if (selectedCategory) {
      fetchProductsByCategory(selectedCategory);
    } else {
      fetchProducts(page);
    }
  }, [page, selectedCategory]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    products,
    setProducts,
    isLoading,
    searchProducts,
    input,
    setInput,
    searchByBarcode,
    barcode,
    setBarcode,
    setIsLoading,
    fetchProductDetailByBarcode,
    productDetail,
    page,
    setPage,
    hasMore,
    Categories,
    selectedCategory,
    setSelectedCategory,
  };
};

export default useProductList;
