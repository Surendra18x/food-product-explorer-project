import { useState, useEffect } from 'react';

const useProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [barcode,setBarcode] = useState([]);
  const [productDetail, setProductDetail] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);


  const fetchProducts = async (page = 0) => {
    const response = await fetch(`https://world.openfoodfacts.org/${page}?json=true`);
    const data = await response.json();
    if (data.products.length === 0) {
      setHasMore(false); 
    } else {
      setProducts((prev) => [...prev, ...data.products]);
    }
    setIsLoading(false);
  }

  const searchProducts = async (input) => {
    const response = await fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${input}&json=true`);
    const data = await response.json();
    setProducts(data.products);
    setIsLoading(false);
  }

  const searchByBarcode = async (barcode) => {
    const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
    const data = await response.json();
    setProducts([data.product])
  }


  const fetchProductDetailByBarcode = async (barcode) => {
    const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
    const data = await response.json();
    setProductDetail(data.product);
  };
  

  useEffect(() => {
    setIsLoading(true);
    fetchProducts(page);
  }, [page]);



  return { products, setProducts, isLoading, searchProducts,input,setInput,searchByBarcode,barcode,setBarcode,setIsLoading,fetchProductDetailByBarcode,productDetail, page, setPage, hasMore};
};

export default useProductList;
