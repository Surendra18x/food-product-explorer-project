import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from "./ProductList"
import SearchBar from "./SearchBar";
import ProductDetail from "./ProductDetailPage"
import BarcodeSearch from "./BarcodeSearch"
import useProductList from '../../../services/openFoodFactsAPI';


export const Home = () => {
   
  const { products, isLoading, searchProducts, input, setInput, searchByBarcode, barcode, setBarcode, setIsLoading, setPage, hasMore } = useProductList()

  return (
      <Router>
      <>
        <header className="header">
          <h1 className="highlighted-text-shadow">
            Food<br />
            Product<br />
            Explorer
          </h1>

          <SearchBar
            searchProducts={searchProducts}
            input={input}
            setInput={setInput}
            setIsLoading={setIsLoading}
          />

          <BarcodeSearch
            barcode={barcode}
            setBarcode={setBarcode}
            searchByBarcode={searchByBarcode}
          />
        </header>

        <Routes>
          <Route
            path="/"
            element={<ProductList products={products} isLoading={isLoading} setPage={setPage} hasMore={hasMore} />}
          />
          <Route
            path="/product/:barcode"
            element={<ProductDetail />}
          />
        </Routes>
        

      </>
    </Router>
    )

}