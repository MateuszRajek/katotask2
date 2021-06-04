import React, { useState } from 'react';
import SearchingBar from './Components/SearchingBar';
import './App.css';
import Weather from './Components/Weather';

function App() {
  const [weatherInfo, setWeatherInfo] = useState('')


  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchingBar setWeatherInfo={setWeatherInfo} />
      <Weather weatherInfo={weatherInfo} />
    </div>
  );
}

export default App;
