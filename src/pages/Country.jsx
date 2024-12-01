import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCountryByName } from '../Api';

const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchCountryByName(name).then((data) => {
      setCountry(data[0]);
    });
  }, [name]);

  if (!country) return <div>Loading...</div>;

  return (
    <div className="country-detail">
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <h1>{country.name.common}</h1>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Capital: {country.capital}</p>
      <h3>Border Countries:</h3>
      <div className="borders">
        {country.borders?.map((border) => (
          <Link key={border} to={`/country/${border}`}>
            {border}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Country;