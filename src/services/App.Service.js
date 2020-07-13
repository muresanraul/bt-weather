import Endpoints, { formatEndpoint } from '../configurations/endpoints';
const getFormatedWeatherData = (rawData) => {
    if (rawData) {
        const weatherData = {
            weather_main: rawData.weather[0].main,
            weather_description: rawData.weather[0].description,
            weather_icon: formatEndpoint(Endpoints.weatherIconUrl, {icon: rawData.weather[0].icon}),
            temp: rawData.main.temp,
            feels_like: rawData.main.feels_like,
            temp_min: rawData.main.temp_min,
            temp_max: rawData.main.temp_max,
            pressure: rawData.main.pressure,
            humidity: rawData.main.humidity,
            visibility: rawData.visibility,
            country: rawData.sys.country,
            city: rawData.name,
            wind_speed: rawData.wind.speed
        };
        return weatherData;
    }
    return null;
}

export default {
    getFormatedWeatherData
}