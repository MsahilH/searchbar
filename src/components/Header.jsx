// src/components/Header.js
import { BsSearch } from 'react-icons/BsSearch';
import React, { useState } from "react";
import "../style/header.css"; 

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    setShowDropdown(query.length > 0);
  };

  return (
    <header>
      <div className="search-container">
      <div className="search-icon">
          <FaSearch /> {/* Use the search icon component */}
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="BsSearch Search"
        />
        {showDropdown && (
          <div className="search-dropdown">
            {/* Your dropdown content here */}
            <a href="#">Result 1</a>
            <a href="#">Result 2</a>
            <a href="#">Result 3</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
