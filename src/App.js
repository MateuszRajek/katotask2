import React, { useState } from 'react';
import './App.css';
import { getWeatherInfo } from './requests'

function App() {
  const [cityName, setCityName] = useState('');
  const [weatherInfo, setWeatherInfo] = useState('')

  const updateCity = ({target : {value}}) => {
    console.log(value)
    setCityName(value)
  }


  const getAndRenderWeatherInfo = () => {
    getWeatherInfo(cityName)
    .then(resp => {
      const { list } = resp.data;
        setWeatherInfo(list)   
  })}

  
  


  return (
    <div className="App">
      <h1>Weather App</h1>
      <p>Please choose the city from the list to get the wether forecast</p>
      <select defaultValue="Choose the City" onChange={updateCity}>
        <option  disabled="disabled">Choose the City</option>
        <option>London</option>
        <option>München</option>
      </select>
      <button onClick={getAndRenderWeatherInfo}>Get weather info</button>
    
    <ul>
      {weatherInfo && weatherInfo.map(item => {
        return(
          <div key={`${item.dt_txt}-${item.main.humidity}-${item.main.temp}`}>
            <p>{item.dt_txt}</p>
            <p>{item.main.humidity}</p>
            <p>{item.main.temp}</p>
          </div> 
        )
      })}
    </ul>
    
    </div>
  );
}

export default App;
