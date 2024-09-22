import React, { useState, useEffect } from "react";
import './style.css';
import { Home } from "./pages/Home/Components/HomePage";



// function App() {
//   return <Home />
// }

function App() {
  // const [data, setData] = useState()
  const [product, setProducts] = useState([])
  useEffect(() => {
    fetch("https://world.openfoodfacts.org?json=true")
      .then(response => response.json())
      .then(data => setProducts(data.products));



  }, [])
  return (
    <>

      <div className="container">
        {product.map((product) => {
          return (
            <div className="card">
              <img src={product.image_url} alt={product.product_name} />
              <h2>{product.product_name}</h2>
              <p>Category: {product.categories}</p>
              <p>Nutrition Grade: {product.nutrition_grades}</p>

            </div>
          );
        })}
      </div>
    </>
  )
}

export default App
