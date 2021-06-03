import axios from 'axios'

const APIkey = '5beeedecb9ad6d5140c9fc621e3c1902'

// export const getWeatherInfo = async cityName => {
//     const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`)

//     return response
// }

export const getWeatherInfo = async cityName => {
    const response = await axios.get(`https://samples.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}`)

    return response
}