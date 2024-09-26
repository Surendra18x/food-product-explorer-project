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
            <SearchBar/>

            
        </header>
    );
};

export default Header