import React, { useState } from 'react';
import SearchingBar from './Components/SearchingBar/SearchingBar';
import Weather from './Components/Weather/Weather';
import { getWeatherInfo } from './requests';
import './App.css';

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [interval, setIntervalState] = useState();

  const intervalSetup = () => {
    clearInterval(interval);
    weatherInfo && setIntervalState(
      setInterval(() => {
        getAndRenderWeatherInfo();
      }, 10000)
    );

    return () => {
      clearInterval(interval);
    };
  };

  const getAndRenderWeatherInfo = () => {
    getWeatherInfo(cityName)
    .then(resp => {
      const { list } = resp.data;
        setWeatherInfo(list);
  })};

  return (
    <div className="container">
      <h1>Weather App</h1>
      <SearchingBar setCityName={setCityName} onClick={getAndRenderWeatherInfo} />
     { weatherInfo && <Weather weatherInfo={weatherInfo} intervalSetup={intervalSetup} cityName={cityName} />}
    </div>
  );
}

export default App;
