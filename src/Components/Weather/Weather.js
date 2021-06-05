import React, { useEffect } from 'react';
import './Weather.css'

function Weather({ weatherInfo, intervalSetup }) {

  useEffect(intervalSetup, []);

  return (
    weatherInfo && <div className="weather-info">
      <table className="table">
      <thead>
        <tr className="weather-info__titles">
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Humidity</th>
          <th scope="col">Temperature</th>
        </tr>
      </thead>
      <tbody>
      {weatherInfo && weatherInfo.map(item => {
          const date = item.dt_txt.split(" ")[0];
          const time = item.dt_txt.split(" ")[1];
          const humidity = `${item.main.humidity}%`;
          const temp = `${Math.round(item.main.temp - 273)}° C`
        return(
        <tr className="weather-info__score" key={`${date}-${time}-${humidity}-${temp}`}>
          <td>{date}</td>
          <td>{time}</td>
          <td>{humidity}</td>
          <td>{temp}</td>
        </tr>
          )
        })}
      </tbody>
      </table>
    </div>
  );
}

export default Weather;
