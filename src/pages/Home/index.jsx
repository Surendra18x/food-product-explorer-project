import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from "./Components/ProductList"
import SearchBar from "./Components/SearchBar";
import ProductDetail from "../ProductDetail"
import BarcodeSearch from "./Components/BarcodeSearch"
import useProductList from '../../services/openFoodFactsAPI';
import { CategoryFilter } from './Components/CategoryFilter';
import MyLogo from "../../assets/NutryFy.png";


export const Home = () => {
   
  const { products, isLoading, searchProducts, input, setInput, searchByBarcode, barcode, setBarcode, setIsLoading, setPage, hasMore, Categories, selectedCategory, setSelectedCategory} = useProductList()

  return (
      <>
        <header className="header">
          {/* <div className='logo'>
          <img src={} alt="" />
          </div> */}
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

          <CategoryFilter 
          Categories={Categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          />
        </header>
        <ProductList products={products} isLoading={isLoading} setPage={setPage} hasMore={hasMore} />
        <footer>
          <div className='footer-div'>
          A collaborative, free and open database of food products from around the world.
          </div>
        </footer>

      </>
    )

}