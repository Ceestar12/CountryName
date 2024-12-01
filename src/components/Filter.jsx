import React from 'react';

const SearchAndFilter = ({ setSearchTerm, setRegion }) => {
  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleRegionChange = (e) => setRegion(e.target.value);

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleSearchChange}
      />
      <select onChange={handleRegionChange}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchAndFilter;
