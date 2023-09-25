// App.js
import React from 'react';
import './National.css'; // Add your CSS styling here
import CountryCard from './CountryCard';

const National= () => {
  // Define data for countries
  const countries = [
    { name: 'India', iconUrl: 'india.jpeg' },
    { name: 'Australia', iconUrl: 'australia.jpg' },
    { name: 'South Africa', iconUrl: 'sa.png' },
    { name: 'England', iconUrl: 'eng.png' },
    { name: 'Sri Lanka', iconUrl: 'sl.png' },
    { name: 'West Indies', iconUrl: 'wi.jpg' },
    { name: 'New Zealand', iconUrl: 'nz.jpg' },
    { name: 'Pakistan', iconUrl: 'pak.jpg' },
  ];

  return (
    <div className="cla">
      <h1>NATIONAL ASSOCIATIONS</h1>
      <div className="country-list">
        {countries.map((country, index) => (
          <CountryCard
            key={index}
            countryName={country.name}
            iconUrl={country.iconUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default National;
