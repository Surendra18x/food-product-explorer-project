import React,{useState} from 'react';



const SearchBar = ({
  text,
  setText,
  placeholder,
  onSubmit,
  buttonText = "Search",
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        onKeyDown={onKeyPress}
        className="input-field"
      />
      <button className="search-btn" onClick={onSubmit}>
        {buttonText}
      </button>
    </div>
  );
};

export default SearchBar;
