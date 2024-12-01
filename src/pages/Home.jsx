import React, { useEffect, useState } from 'react';
import SearchAndFilter from '../components/Filter';
import CountryCard from '../components/CountryCard';
import { fetchAllCountries } from '../Api';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');

  // Fetch countries when the component mounts
  useEffect(() => {
    fetchAllCountries().then((data) => {
      if (data) setCountries(data);
      console.log(data);
      
    });
  }, []);

  // Filter countries by search term and region
  const filteredCountries = countries.filter((country) => {
    const matchesSearch =
      searchTerm === '' ||
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = region === '' || country.region === region;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="home">
      {/* Search and Filter Controls */}
      <SearchAndFilter setSearchTerm={setSearchTerm} setRegion={setRegion} />

      {/* Country Cards */}
      <div className="country-grid">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
