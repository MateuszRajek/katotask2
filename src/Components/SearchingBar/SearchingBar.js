import React from 'react';
import './SearchingBar.css';

function SearchingBar({ setCityName, onClick }) {

  const updateCity = ({target : {value}}) => {
    setCityName(value);
  }

  return (
    <div className="searching-bar">
      <p>Please choose the city from the list to get the wether forecast</p>
      <select className="searching-bar__select" defaultValue="Choose the City" onChange={updateCity}>
        <option disabled="disabled">Choose the City</option>
        <option>London</option>
        <option>München</option>
      </select>
      <button onClick={onClick}>Get weather info</button>
    </div>
  );
}

export default SearchingBar;
