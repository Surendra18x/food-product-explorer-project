import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import BarcodeSearch from "./BarcodeSearch";
import CategoryFilter from "./CategoryFilter";
import SortOptions from "./sortOptions";
import OpenFoodFactsAPI from "../../../services/openFoodFactsAPI";
import './HomeStyle.css'


const Header = () => {
    const { products, setSearchQuery, setCategory } = OpenFoodFactsAPI();

    return (
        <header className="header">
            <h1 className="header-title">Food Product Explorer</h1>
            <SearchBar setSearchQuery={setSearchQuery} />
      <BarcodeSearch setProducts={setSearchQuery} />
      <CategoryFilter setCategory={setCategory} />
      <SortOptions products={products} setProducts={setSearchQuery} />
            
        </header>
    );
};

export default Header