import React from "react";
import "./SearchInput.css";

export const SearchInput = ({
  searchInputValue,
  handleChange,
  clearSearch,
}) => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        className="typeBar"
        value={searchInputValue}
        placeholder="Search here..." 
        onChange={handleChange}
      />

     
    </div>
  );
};