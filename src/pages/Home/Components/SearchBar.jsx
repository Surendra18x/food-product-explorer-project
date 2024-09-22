import React from 'react';


const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="input-field search-bar"
      />
      <button type="submit" className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;
