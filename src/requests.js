import axios from 'axios';

const APIkey = 'ddf4f6b056c59f6b9ba2fe02b1cf3c5e';

export const getWeatherInfo = async cityName => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}`);

    return response;
};

