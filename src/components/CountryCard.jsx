import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.name.common}`} className="country-card">
      <img
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
        loading="lazy"
      />
      <div className="card-details">
        <h3>{country.name.common}</h3>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
