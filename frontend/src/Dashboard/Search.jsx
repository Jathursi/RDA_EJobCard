import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass the search term up to the parent component
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearch(''); // Clear the search term
  };

  return (
    <div className="Search">
      <input
        type="text"
        className="input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button
        className="search-btn"
        onClick={clearSearch}
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default Search;
