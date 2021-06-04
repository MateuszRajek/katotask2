import React from 'react';

function Weather({ weatherInfo }) {


  return (
    <div className='weather-info'>
      {weatherInfo && weatherInfo.map(item => {
          const date = item.dt_txt;
          const humidity = `${item.main.humidity}%`;
          const temp = `${Math.round(item.main.temp - 273)}° C`
        
        return(
          <div className='weather-info__score' key={`${date}-${humidity}-${temp}`}>
            <p>{date}</p>
            <p>{humidity}</p>
            <p>{temp}</p>
          </div> 
        )
      })}
    </div>
  );
}

export default Weather;
