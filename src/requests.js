import axios from 'axios';

const APIkey = '';

export const getWeatherInfo = async cityName => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}`);

    return response;
};

