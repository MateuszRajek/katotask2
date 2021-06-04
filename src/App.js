import React, { useState } from 'react';
import SearchingBar from './Components/SearchingBar/SearchingBar';
import Weather from './Components/Weather/Weather';
import './App.css';

function App() {
  const [weatherInfo, setWeatherInfo] = useState("")



  return (
    <div className="container">
      <h1>Weather App</h1>
      <SearchingBar setWeatherInfo={setWeatherInfo} />
      <Weather weatherInfo={weatherInfo} />
    </div>
  );
}

export default App;
