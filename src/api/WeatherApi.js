import {endpoints, formatEndpoint } from '../configurations/';
import RestHelper from './RestHelper';
import { sleep } from '../helpers';

class WeatherApi {

  static async getWeatherData(location) {
    try {
      const response = await RestHelper.get(formatEndpoint(endpoints.weatherApiUrl, {location}));
      debugger;
      return await sleep(response);
    } catch (error) {
      console.error(error);
    }
  }

}

export default WeatherApi;
