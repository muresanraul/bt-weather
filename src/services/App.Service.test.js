import { default as appService } from './App.Service';

describe('In App.Service.js:', () => {

  it('getFormatedWeatherData method - returns the correctlly assambled weather data object', () => {

    const rawDataJson = '{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":15.36,"feels_like":8.2,"temp_min":14.44,"temp_max":16.67,"pressure":1013,"humidity":51},"visibility":10000,"wind":{"speed":8.7,"deg":260},"clouds":{"all":47},"dt":1593984507,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1593921051,"sunset":1593980346},"timezone":3600,"id":2643743,"name":"London","cod":200}';
    const rawData = JSON.parse(rawDataJson);
    const actual = appService.getFormatedWeatherData(rawData);
    const expected = {
      weather_main: "Clouds",
      weather_description: "scattered clouds",
      weather_icon: "03n",
      temp: 15.36,
      feels_like: 8.2,
      temp_min: 14.44,
      temp_max: 16.67,
      pressure: 1013,
      humidity: 51,
      visibility: 10000,
      country: "GB",
      city: "London",
      wind_speed: 8.7
    };
    expect(actual).toEqual(expected);
  });

});
