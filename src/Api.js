// src/Api.js

export const fetchAllCountries = () => {
  return fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching all countries:', error));
};

export const fetchCountryByName = (name) => {
  return fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching country by name:', error));
};
