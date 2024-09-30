import ProductList from "./Components/ProductList";
import SearchBar from "./Components/SearchBar";
import useProductList from "../../services/openFoodFactsAPI";
import { CategoryFilter } from "./Components/CategoryFilter";

export const Home = () => {
  const {
    products,
    isLoading,
    searchProducts,
    input,
    setInput,
    searchByBarcode,
    barcode,
    setBarcode,
    setIsLoading,
    setPage,
    hasMore,
    Categories,
    selectedCategory,
    setSelectedCategory,
  } = useProductList();

  return (
    <>
      <div className="header-list-wrapper">
        <header className="header">
          <div className="header-text-container">
            <h1 className="main-text">
              Nutri<span>Fy</span>
            </h1>
            <p className="description">Know what you are eating...</p>
            <p className="description-qoute">“The doctor of the future will no longer treat <br/>the human frame with drugs, but rather will cure <br/> and prevent disease with nutrition.”<br/>
            <span>– Thomas Edison</span> </p>
          </div>
          <div>
            <div className="search-wrapper">
              <SearchBar
                text={input}
                setText={setInput}
                onSubmit={() => searchProducts(input)}
                placeholder={"Search by product name..."}
              />
              <SearchBar
                text={barcode}
                setText={setBarcode}
                onSubmit={() => searchByBarcode(barcode)}
                placeholder={"Search by barcode..."}
              />

              <CategoryFilter
                Categories={Categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
          </div>
        </header>
        <ProductList
          products={products}
          isLoading={isLoading}
          setPage={setPage}
          hasMore={hasMore}
        />
      </div>

      <footer>
        <div className="footer-div">
          A collaborative, free and open database of food products from around
          the world.
        </div>
      </footer>
    </>
  );
};
