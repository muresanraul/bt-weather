const formatWetherData = (data) => {
    return {
      country: data.country ? data.country : 'unknown',
      city: data.city ? data.city : 'unknown',
      weather_main: data.weather_main ? data.weather_main : 'unknown',
      weather_description: data.weather_description ? data.weather_description : 'unknown',
      weather_icon: data.weather_icon,
      temp: data.temp ? data.temp + ' C⁰' : 'unknown',
      feels_like: data.feels_like ? data.feels_like + ' C⁰' : 'unknown',
      temp_min: data.temp_min ? data.temp_min + ' C⁰' : 'unknown',
      temp_max: data.temp_max ? data.temp_max + ' C⁰' : 'unknown',
      pressure: data.pressure ? data.pressure + ' hPa' : 'unknown',
      humidity: data.humidity ? data.humidity + ' %' : 'unknown',
      visibility: data.visibility ? data.visibility + ' m' : 'unknown',
      wind_speed: data.wind_speed ? data.wind_speed + ' m/s' : 'unknown'
    }
};
export const WeatherService = {
    formatWetherData
}