
import Header from "./header";
import OpenFoodFactsAPI from "../../../services/openFoodFactsAPI";
import ProductList from "./ProductList"
import { useState } from "react";

export const Home = () => {
    const { products, loading,loadMore } = OpenFoodFactsAPI();
    

  
 


    return (
        <>
            <div className="App">
                <Header />
                {loading ? <p>Loading...</p> : <ProductList products={products} />}
                <div className="flex justify-center my-4">
        <button 
          onClick={loadMore} 
          className="bg-blue-500 text-white rounded p-2"
          disabled={loading}
        >
          Load More
        </button>
      </div>

      

                <main>

                </main>
            </div>
        </>
    )

}