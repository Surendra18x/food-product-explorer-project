import React,{useState} from 'react';
import useProductList from '../../../services/openFoodFactsAPI';


const SearchBar = ({searchProducts,input,setInput,setIsLoading}) => {

  
  
  const handleChange = (value) => {
    setInput(value);
  }

  const handleSearch = () => {
    searchProducts(input);
    setIsLoading(true);
  }

  return (
    <div className="search-container">
    
    <input
        type="text"
        placeholder="Search for products..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => {
          if(e.key === "Enter"){
            {this.handleSearch}
          }
        }}
        className="input-field"
      />
      <button className='search-btn' onClick={handleSearch}>Search</button>

    </div>
  );
};

export default SearchBar;
