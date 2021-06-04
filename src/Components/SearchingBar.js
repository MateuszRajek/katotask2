import React, { useState } from 'react';
import { getWeatherInfo } from '../requests';

function SearchingBar({ setWeatherInfo }) {
  const [cityName, setCityName] = useState('');

  const updateCity = ({target : {value}}) => {
    setCityName(value)
  }
 
  const getAndRenderWeatherInfo = () => {
    getWeatherInfo(cityName)
    .then(resp => {
      console.log(resp)
      const { list } = resp.data;
        setWeatherInfo(list)   
  })}

  return (
    <div className="searching-bar">
      <p>Please choose the city from the list to get the wether forecast</p>
      <select defaultValue="Choose the City" onChange={updateCity}>
        <option  disabled="disabled">Choose the City</option>
        <option>London</option>
        <option>München</option>
      </select>
      <button onClick={getAndRenderWeatherInfo}>Get weather info</button>
    </div>
  );
}

export default SearchingBar;
