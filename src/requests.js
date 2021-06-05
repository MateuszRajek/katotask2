import axios from 'axios'

const APIkey = '5beeedecb9ad6d5140c9fc621e3c1902'
// const APIkey = 'b6907d289e10d714a6e88b30761fae22'


export const getWeatherInfo = async cityName => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}`)

    return response
}
// export const getWeatherInfo = async cityName => {
//     const response = await axios.get(`https://samples.openweathermap.org/data/2.5/forecast?q=${cityName},us&appid=${APIkey}`)

//     return response
// }

